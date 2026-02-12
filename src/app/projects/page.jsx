"use client";

import React from "react";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";
import Image from "next/image";
import clsx from "clsx";
import { SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs } from "react-icons/si";

// Example Projects Data
const projects = [
  {
    title: "Amazon Clone",
    subtitle: "Full-stack E-commerce Website",
    image: "/music-store.png",
    techStack: [
      { name: "React", icon: <SiReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "TailwindCSS", icon: <SiTailwindcss /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
    ],
    github: "https://github.com/username/amazon-clone",
    live: "https://amazon-clone-demo.com",
  },
  {
    title: "Portfolio Website",
    subtitle: "Developer Portfolio",
    image: "/portfolio.png",
    techStack: [
      { name: "React", icon: <SiReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "TailwindCSS", icon: <SiTailwindcss /> },
    ],
    github: "https://github.com/username/portfolio",
    live: "https://portfolio-demo.com",
  },
];

const ProjectPage = () => {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      {/* Section Header */}
      <FadeIn className="flex items-center gap-x-8 mb-16">
        <h2 className="text-center font-display text-sm font-semibold tracking-wider text-neutral-950      sm:text-left">
          My Projects
        </h2>
        <div className="h-px flex-auto bg-neutral-300 dark:bg-neutral-700" />
      </FadeIn>

      {/* Projects Grid */}
      <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <FadeIn key={index}>
            <div className="flex flex-col rounded-xl bg-neutral-100 dark:bg-neutral-900 shadow-2xl overflow-hidden transition-transform hover:-translate-y-2">

              {/* Full Image */}
              <div className="relative w-full h-auto">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1000}      // optional, used for optimization
                  height={600}      // optional, maintain aspect ratio
                  className="w-full h-auto object-contain"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                />
              </div>

              {/* Project Info */}
              <div className="p-8 flex flex-col flex-auto">
                <h3 className="font-display text-2xl md:text-3xl font-semibold text-neutral-950 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-3 text-neutral-700 dark:text-neutral-300 text-lg">
                  {project.subtitle}
                </p>

                {/* Tech Stack */}
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.techStack.map((tech, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 bg-neutral-200 dark:bg-neutral-800 px-3 py-1 rounded-full text-sm font-medium text-neutral-950 dark:text-white"
                    >
                      {tech.icon}
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex flex-wrap gap-4">
                  <Button
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    invert
                  >
                    GitHub
                  </Button>
                  <Button
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Container>
  );
};

export default ProjectPage;
