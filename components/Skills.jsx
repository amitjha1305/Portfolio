"use client"

import { IconCloud } from "./magicui/icon-cloud";
import { DotPattern } from "./magicui/dot-pattern";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const slugs = [
  "javascript",
  "react",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "fastify",
  "nextdotjs",
  "firebase",
  "vercel",
  "git",
  "github",
  "androidstudio",
  "python",
  "mongodb",
  "mongoose",
  "tailwindcss",
  "bootstrap",
  "mysql",
  "awsorganizations",
  "axios",
  "AWS"
];

const Skills = () => {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <div id="skills" className="relative flex h-screen w-full flex-col items-center justify-center rounded-lg bg-gradient-to-b from-transparent to-indigo-50">
      <div className="container mx-auto">
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
          )}
        />
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-2 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h2>
        <div className="relative flex size-full items-center justify-center overflow-hidden">
          <IconCloud images={images} />
        </div>
      </div>

    </div>
  );
}

export default Skills;