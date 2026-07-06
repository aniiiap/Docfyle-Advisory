import { execSync } from "node:child_process";
import { rmSync, existsSync } from "node:fs";
import { join } from "node:path";

const PORT = process.env.PORT || "3006";
const ROOT = process.cwd();

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/** Free port 3006 on Windows (and fall back gracefully elsewhere). */
function killPort(port) {
  const platform = process.platform;
  try {
    if (platform === "win32") {
      const out = execSync(`netstat -ano | findstr :${port}`, { encoding: "utf8", stdio: ["pipe", "pipe", "ignore"] });
      const pids = new Set();
      for (const line of out.split(/\r?\n/)) {
        if (!line.includes("LISTENING")) continue;
        const parts = line.trim().split(/\s+/);
        const pid = parts[parts.length - 1];
        if (pid && /^\d+$/.test(pid) && pid !== "0") pids.add(pid);
      }
      for (const pid of pids) {
        try {
          execSync(`taskkill /F /PID ${pid}`, { stdio: "ignore" });
          console.log(`Stopped process ${pid} on port ${port}`);
        } catch {
          /* already exited */
        }
      }
      return;
    }
    execSync(`lsof -ti:${port} | xargs kill -9 2>/dev/null`, { shell: true, stdio: "ignore" });
  } catch {
    /* port not in use */
  }
}

async function removeNextDir() {
  const nextDir = join(ROOT, ".next");
  if (!existsSync(nextDir)) {
    console.log("No .next folder to remove");
    return;
  }

  for (let attempt = 1; attempt <= 8; attempt++) {
    try {
      rmSync(nextDir, { recursive: true, force: true, maxRetries: 3, retryDelay: 500 });
      console.log("Removed .next");
      return;
    } catch (error) {
      if (attempt === 8) throw error;
      console.log(`Retry removing .next (${attempt}/8)...`);
      killPort(PORT);
      await sleep(800);
    }
  }
}

async function main() {
  killPort(PORT);
  await sleep(600);
  await removeNextDir();
}

main().catch((error) => {
  console.error("Could not fully clean .next:", error.message);
  console.error("Close all terminals running npm run dev, then run: npm run clean");
  process.exit(1);
});
