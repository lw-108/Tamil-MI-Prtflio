import React from "react";
import Section from "./Section";
import imageLaptop from "@/images/Gandhi.png";
import { TagList, TagListItem } from "./TagList";

const Build = () => {
  return (
    <Section
      title="Bachelor of Computer Science"
      image={{ src: imageLaptop, shape: 2 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Completed a{" "}
          <strong className="font-semibold text-neutral-950">
            Bachelor of Computer Science (B.Sc – CS)
          </strong>{" "}
          at Gandhi Arts and Science College.
        </p>

        <p>
          This program provided a strong academic foundation in core computer
          science subjects and practical programming skills.
        </p>

        <p>
          It marked the beginning of my journey into software development,
          problem-solving, and full-stack application building.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Program Overview
      </h3>

      <TagList className="mt-4">
        <TagListItem>Institution: Gandhi Arts and Science College</TagListItem>
        <TagListItem>Duration: 2021 – 2024</TagListItem>
        <TagListItem>Degree: B.Sc – Computer Science</TagListItem>
        <TagListItem>Location: Tamil Nadu</TagListItem>
        <TagListItem>Core Subjects: DSA, DBMS, OS, CN</TagListItem>
        <TagListItem>Focus: Programming & System Fundamentals</TagListItem>
      </TagList>
    </Section>
  );
};

export default Build;
