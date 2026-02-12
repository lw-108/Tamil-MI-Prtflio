import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";
import imageLaptop from "../images/dev2.png";
import List, { ListItem } from "./List";

const Services = () => {
  return (
    <>
      {/* 🔥 Section Header */}
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-neutral-900  sm:text-left transition-colors">
            My Services
          </h2>
          <div className="h-px flex-auto bg-neutral-300 dark:bg-neutral-700 transition-colors" />
        </FadeIn>
      </Container>

      {/* Main Intro */}
      <SectionIntro
        title="I design and build high-performance digital products."
        className="mt-12"
      >
        <p className="text-neutral-600 dark:text-neutral-400 transition-colors">
          As a full-stack developer, I focus on building scalable, maintainable,
          and user-centric applications that combine strong engineering with
          thoughtful design.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          
          {/* IMAGE SIDE */}
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end object-fill"
              />
            </FadeIn>
          </div>

          {/* SERVICES LIST */}
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            
            <ListItem title="Frontend Engineering">
              <span className="text-neutral-600 dark:text-neutral-400 transition-colors">
                I build responsive, accessible, and visually refined interfaces
                using modern frameworks like React and Next.js, ensuring
                performance and seamless user experience across devices.
              </span>
            </ListItem>

            <ListItem title="Backend Development">
              <span className="text-neutral-600 dark:text-neutral-400 transition-colors">
                I design scalable backend systems, REST APIs, and database
                architectures using Node.js, Express, and modern data solutions
                to support reliable and secure applications.
              </span>
            </ListItem>

            <ListItem title="Full-Stack Applications">
              <span className="text-neutral-600 dark:text-neutral-400 transition-colors">
                From concept to deployment, I develop complete web applications
                with clean architecture, optimized performance, and
                production-ready infrastructure.
              </span>
            </ListItem>

            <ListItem title="UI/UX & Performance Optimization">
              <span className="text-neutral-600 dark:text-neutral-400 transition-colors">
                I focus on intuitive design systems, accessibility, and
                performance optimization to create fast and elegant digital
                experiences.
              </span>
            </ListItem>

          </List>
        </div>
      </Container>
    </>
  );
};

export default Services;
