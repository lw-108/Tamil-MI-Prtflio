"use client";

import { useEffect, useState } from "react";
import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import StylizedImage from "@/components/StylizedImage";
import logoPhobiaDark from "@/images/clients/phobia/logo-dark.svg";
import imageLaptop from "@/images/tamil.png";

export default function Home() {
  const roles = [
    "Full-Stack Developer",
    "Frontend Engineer",
    "Backend Architect",
    "Creative Technologist",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    if (index < currentRole.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentRole[index]);
        setIndex(index + 1);
      }, 70);
      return () => clearTimeout(timeout);
    } else {
      const pause = setTimeout(() => {
        setText("");
        setIndex(0);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 1500);
      return () => clearTimeout(pause);
    }
  }, [index, roleIndex]);

  return (
    <main className=" text-black bg-white  transition-colors duration-300 rounded-2xl">

      <Container className="mt-24 sm:mt-32">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}
          <div>
            <h1 className="font-display text-5xl md:text-7xl font-medium tracking-tight text-neutral-950">
              I'm Tamilarasan
            </h1>

            <div className="font-display text-3xl md:text-4xl font-medium tracking-tight text-blue-600 dark:text-blue-400 mt-6">
              {text}
              <span className="animate-pulse">|</span>
            </div>

            <FadeIn className="max-w-xl">
              <h2 className="font-display text-3xl font-medium tracking-tight text-neutral-950  mt-12">
                I build fast, scalable and beautifully engineered web experiences.
              </h2>

              <p className="mt-4 text-base text-neutral-600 dark:text-neutral-400">
                I specialize in building high-performance applications using
                modern frameworks and clean architecture. From elegant UI
                systems to scalable backend infrastructure, I turn complex ideas
                into refined, production-ready solutions.
              </p>
            </FadeIn>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center lg:justify-end">
            <StylizedImage
              src={imageLaptop}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end"
              priority
            />
          </div>
        </div>
      </Container>

      <Clients />

      <Testimonials
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: "Phobia", logo: logoPhobiaDark }}
      >
        Working with this developer was a game changer for our product. The
        architecture was clean, the performance improvements were measurable,
        and the final result exceeded our expectations both technically and
        visually.
      </Testimonials>

      <Services />

      <ContactSection />
    </main>
  );
}
