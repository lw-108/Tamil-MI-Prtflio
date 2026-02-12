import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <PageIntro eyebrow="About Me" title="Building scalable and meaningful digital experiences">
        <p>
          I’m a passionate Full-Stack Developer focused on creating modern,
          scalable, and user-friendly web applications.
        </p>

        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            My journey in technology started with curiosity and grew into a
            deep interest in building real-world solutions. From responsive
            frontend interfaces to scalable backend systems, I enjoy working
            across the full development stack.
          </p>

          <p>
            Currently pursuing my Master of Computer Applications (MCA), I
            continuously explore new technologies, strengthen my problem-solving
            skills, and build projects that reflect clean architecture,
            performance optimization, and modern design principles.
          </p>

          <p>
            I believe in writing maintainable code, learning consistently, and
            turning ideas into impactful digital products.
          </p>
        </div>
      </PageIntro>

      <Container className="mt-16">
        <StatList>
          <StatListItem value="10+" label="Projects Built" />
          <StatListItem value="3+" label="Years of Learning & Practice" />
          <StatListItem value="Full-Stack" label="Development Focus" />
        </StatList>
      </Container>

      <Cultures />
      <ContactSection />
    </>
  );
};

export default AboutPage;
