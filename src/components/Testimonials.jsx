import React from "react";
import GridPattern from "./GridPattern";
import clsx from "clsx";
import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";
import Image from "next/image";
import Link from "next/link";
import projectImage from "../images/music-store.png"; // add your image

const Projects = ({ className }) => {
  return (
    <div
      className={clsx(
        "relative isolate bg-neutral-50 py-16 sm:py-28 md:py-32",
        className
      )}
    >
      <GridPattern
        className="absolute inset-0 -z-10 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_50%,transparent_60%)]"
        yOffset={-256}
      />

      <Container>
        {/* Section Heading Strip */}
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-neutral-950 sm:text-left">
            See My Works
          </h2>
          <div className="h-px flex-auto bg-neutral-300" />
        </FadeIn>

        {/* Project Content */}
        <FadeIn className="mt-16">
          <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT SIDE */}
            <div>
              <h3 className="font-display text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl">
                Musical Instrument E-Commerce Website
              </h3>

              <p className="mt-6 text-lg text-neutral-600">
                Developed a fully functional musical instrument e-commerce
                platform built with HTML, CSS, and JavaScript. Designed
                for performance, scalability, and seamless user experience.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://your-live-link.com"
                  target="_blank"
                  className="rounded-full bg-neutral-950 px-6 py-3 text-white text-sm font-medium transition hover:bg-neutral-800"
                >
                  Live Demo
                </a>

                <a
                  href="https://github.com/your-repo-link"
                  target="_blank"
                  className="rounded-full border border-neutral-950 px-6 py-3 text-sm text-neutral-600 font-medium transition hover:bg-neutral-950 hover:text-white"
                >
                  GitHub Repo
                </a>
              </div>

              <div className="mt-10">
                <a
                  href="/projects"
                  className="text-sm font-semibold text-blue-600 hover:underline"
                >
                  View More Projects →
                </a>
              </div>
            </div>

            {/* RIGHT SIDE IMAGE */}
            <div className="relative">
              <Image
                src={projectImage}
                alt="Musical Instrument E-Commerce Project"
                className="rounded-3xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </FadeIn>
      </Container>
    </div>
  );
};

export default Projects;
