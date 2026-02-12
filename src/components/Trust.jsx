import React from "react";
import Section from "./Section";
import imageMeeting from "@/images/TN.png";
import List, { ListItem } from "./List";

const SSLC = () => {
  return (
    <Section
      title="Secondary School Leaving Certificate (SSLC – 10th)"
      image={{ src: imageMeeting, shape: 1 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Completed my{" "}
          <strong className="font-semibold text-neutral-950">
            Secondary School Leaving Certificate (SSLC)
          </strong>{" "}
          at Government High School, Puduvadavalli.
        </p>

        <p>
          This stage laid the foundation for my academic discipline and
          analytical thinking, helping me develop consistency and focus in my
          studies.
        </p>

        <p>
          My interest in computers and technology began during this period,
          which later influenced my decision to pursue computer science.
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
          2018 – 2019
        </ListItem>

        <ListItem title="Qualification">
          Secondary School Leaving Certificate (10th)
        </ListItem>

        <ListItem title="Board">
          State Board
        </ListItem>
      </List>
    </Section>
  );
};

export default SSLC;
