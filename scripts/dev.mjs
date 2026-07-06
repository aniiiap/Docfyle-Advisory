import { spawn } from "node:child_process";
import { execSync } from "node:child_process";

const PORT = process.env.PORT || "3006";

console.log("Preparing dev server...\n");

try {
  execSync("node scripts/clean-next.mjs", { stdio: "inherit", cwd: process.cwd() });
} catch {
  process.exit(1);
}

console.log(`\nStarting Next.js (Turbopack) on http://localhost:${PORT}\n`);

const child = spawn(
  "npx",
  ["next", "dev", "--turbo", "-p", PORT],
  {
    cwd: process.cwd(),
    stdio: "inherit",
    shell: true,
    env: {
      ...process.env,
      NEXT_TELEMETRY_DISABLED: "1",
    },
  }
);

child.on("exit", (code) => process.exit(code ?? 0));

process.on("SIGINT", () => {
  child.kill("SIGINT");
});
process.on("SIGTERM", () => {
  child.kill("SIGTERM");
});
