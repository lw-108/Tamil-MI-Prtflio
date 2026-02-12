import Build from "@/components/Build";
import Deliver from "@/components/Deliver";
import Discover from "@/components/Discover";
import Trust from "@/components/Trust";
import PageIntro from "@/components/PageIntro";
import Values from "@/components/Values";
import React from "react";

const EducationPage = () => {
  return (
    <>
      <PageIntro eyebrow="Education" title="My Academic Journey">
        <p>
          My academic background has shaped my analytical thinking, problem
          solving ability, and technical foundation. Here’s a structured
          overview of my educational journey.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        
        {/* School 1 */}
        <Discover
          title="Bachelor of Technology (Computer Science)"
          subtitle="XYZ Engineering College"
          description="Focused on software development, data structures, algorithms, and full-stack web development."
          details={[
            { label: "Degree", value: "B.Tech – Computer Science" },
            { label: "Year", value: "2021 – 2025" },
            { label: "CGPA", value: "8.7 / 10" },
            { label: "Location", value: "Chennai, India" },
          ]}
        />

        {/* School 2 */}
        <Build
          title="Higher Secondary Education"
          subtitle="ABC Higher Secondary School"
          description="Specialized in Mathematics and Computer Science stream."
          details={[
            { label: "Board", value: "State Board" },
            { label: "Year", value: "2019 – 2021" },
            { label: "Percentage", value: "89%" },
            { label: "Major Subjects", value: "Maths, Physics, Computer Science" },
          ]}
        />

        {/* School 3 */}
        <Deliver
          title="Secondary School Education"
          subtitle="ABC Higher Secondary School"
          description="Built foundational knowledge in science, mathematics and logical reasoning."
          details={[
            { label: "Board", value: "State Board" },
            { label: "Year", value: "2018 – 2019" },
            { label: "Percentage", value: "91%" },
          ]}
        />



        {/* School 4 */}
        <Trust />

        {/* School 5 */}
        <Values
          title="Certifications & Developer Utilities"
          subtitle="Professional Growth"
          description="Additional certifications and technical utilities that strengthen my developer profile."
          details={[
            { label: "Full Stack Development", value: "MERN Stack Certification" },
            { label: "Cloud", value: "AWS Fundamentals" },
            { label: "Version Control", value: "Git & GitHub" },
            { label: "Problem Solving", value: "Data Structures & Algorithms" },
          ]}
        />
      </div>

    </>
  );
};

export default EducationPage;
