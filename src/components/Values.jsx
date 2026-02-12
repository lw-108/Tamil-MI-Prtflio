import React from "react";
import GridPattern from "./GridPattern";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Values = () => {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Educational values"
        title="Building knowledge with discipline and innovation"
      >
        <p>
          My academic journey has been guided by consistency, curiosity, and a
          strong foundation in computer science. Each stage of my education has
          shaped not only my technical skills but also my mindset toward
          learning and growth.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Discipline">
            I believe consistent effort and structured learning are the keys to
            mastering complex subjects and achieving long-term academic goals.
          </GridListItem>

          <GridListItem title="Curiosity">
            I actively explore new technologies, programming concepts, and
            emerging trends beyond the classroom to deepen my understanding.
          </GridListItem>

          <GridListItem title="Analytical Thinking">
            My education has strengthened my ability to break down problems,
            analyze solutions, and approach challenges logically.
          </GridListItem>

          <GridListItem title="Adaptability">
            From foundational studies to advanced computer science topics, I
            continuously adapt to new learning environments and technologies.
          </GridListItem>

          <GridListItem title="Continuous Improvement">
            I strive to refine my skills through projects, experimentation, and
            real-world application of theoretical concepts.
          </GridListItem>

          <GridListItem title="Integrity">
            I value honesty, originality, and ethical practices in both
            academic work and collaborative projects.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Values;
