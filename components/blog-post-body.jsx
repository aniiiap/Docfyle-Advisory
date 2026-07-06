"use client";

import { motion } from "framer-motion";

const blockVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: Math.min(i * 0.06, 0.45), ease: "easeOut" },
  }),
};

export function BlogPostBody({ content }) {
  let blockIndex = 0;

  return (
    <div className="blog-prose">
      {content.map((block, index) => {
        const motionIndex = blockIndex++;
        const key = `${block.type}-${index}`;

        if (block.type === "h2") {
          return (
            <motion.h2
              custom={motionIndex}
              id={slugifyHeading(block.text)}
              initial="hidden"
              key={key}
              variants={blockVariants}
              viewport={{ once: true, amount: 0.3 }}
              whileInView="visible"
            >
              <span className="blog-section-marker" aria-hidden />
              {block.text}
            </motion.h2>
          );
        }

        if (block.type === "ul") {
          return (
            <motion.ul
              custom={motionIndex}
              initial="hidden"
              key={key}
              variants={blockVariants}
              viewport={{ once: true, amount: 0.2 }}
              whileInView="visible"
            >
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </motion.ul>
          );
        }

        return (
          <motion.p
            custom={motionIndex}
            initial="hidden"
            key={key}
            variants={blockVariants}
            viewport={{ once: true, amount: 0.15 }}
            whileInView="visible"
          >
            {block.text}
          </motion.p>
        );
      })}
    </div>
  );
}

function slugifyHeading(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
