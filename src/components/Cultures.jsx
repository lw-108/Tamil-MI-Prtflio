import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Cultures = () => {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="My principles"
        title="Code with clarity. Build with purpose."
        invert
      >
        <p>
          My growth as a developer is guided by discipline, continuous learning,
          and a strong passion for building impactful solutions.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <GridList>
          <GridListItem title="Continuous Learning" invert>
            Technology evolves rapidly, and I stay committed to learning new
            frameworks, tools, and best practices to remain future-ready.
          </GridListItem>

          <GridListItem title="Clean & Scalable Code" invert>
            I focus on writing maintainable, readable, and scalable code that
            follows modern architecture patterns and industry standards.
          </GridListItem>

          <GridListItem title="Problem Solving" invert>
            I enjoy breaking down complex problems into simple, efficient
            solutions while optimizing performance and user experience.
          </GridListItem>

          <GridListItem title="Consistency & Discipline" invert>
            Daily improvement, structured learning, and consistent project
            building are core to my development journey.
          </GridListItem>

          <GridListItem title="Innovation" invert>
            I explore creative approaches and modern technologies to build
            applications that are both functional and visually engaging.
          </GridListItem>

          <GridListItem title="Professional Growth" invert>
            My goal is to continuously evolve as a Full-Stack Developer and
            contribute meaningfully to impactful software products.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Cultures;
