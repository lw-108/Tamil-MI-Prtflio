import React from "react";
import Section from "./Section";
import imageWhiteboard from "@/images/ESEC.png";
import { TagList, TagListItem } from "./TagList";

const Discover = () => {
  return (
    <Section
      title="Master of Computer Applications (MCA)"
      image={{ src: imageWhiteboard, shape: 1 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          I am currently pursuing my{" "}
          <strong className="font-semibold text-neutral-950">
            Master of Computer Applications
          </strong>{" "}
          at Erode Sengunthar Engineering College.
        </p>

        <p>
          This program focuses on advanced concepts in{" "}
          <strong className="font-semibold text-neutral-950">
            software development, data structures, cloud computing, and modern
            web technologies
          </strong>
          , helping me strengthen both theoretical knowledge and real-world
          implementation skills.
        </p>

        <p>
          Alongside academics, I actively build full-stack projects and explore
          scalable application architecture to grow as a professional developer.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Academic Details
      </h3>

      <TagList className="mt-4">
        <TagListItem>Degree: MCA</TagListItem>
        <TagListItem>Institution: Erode Sengunthar Engineering College</TagListItem>
        <TagListItem>Duration: 2024 – 2026</TagListItem>
        <TagListItem>Location: Erode, Tamil Nadu</TagListItem>
        <TagListItem>Focus Areas: Full-Stack Development, DSA, Cloud</TagListItem>
        <TagListItem>Career Goal: Software Developer / Full-Stack Engineer</TagListItem>
      </TagList>
    </Section>
  );
};

export default Discover;
