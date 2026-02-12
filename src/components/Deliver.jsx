import React from "react";
import Section from "./Section";
import imageMeeting from "@/images/TN.png";
import List, { ListItem } from "./List";

const Deliver = () => {
  return (
    <Section
      title="Higher Secondary Education (HSC – 12th)"
      image={{ src: imageMeeting, shape: 1 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Completed my{" "}
          <strong className="font-semibold text-neutral-950">
            Higher Secondary Education (HSC)
          </strong>{" "}
          at Government High School, Puduvadavalli.
        </p>

        <p>
          This stage strengthened my fundamentals in mathematics and logical
          reasoning, building the base for my journey into computer science.
        </p>

        <p>
          It was during this time that I developed a strong interest in
          technology and decided to pursue a career in software development.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Academic Details
      </h3>

      <List>
        <ListItem title="Institution">
          Government High School, Puduvadavalli
        </ListItem>

        <ListItem title="Duration">
          2020 – 2021
        </ListItem>

        <ListItem title="Qualification">
          Higher Secondary Certificate (12th)
        </ListItem>

        <ListItem title="Stream">
          Science / Mathematics
        </ListItem>
      </List>
    </Section>
  );
};

export default Deliver;
