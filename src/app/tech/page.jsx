"use client";

import Image from "next/image";
import Container from "@/components/Container";
import FadeIn, { FadeInStagger } from "@/components/FadeIn";

const techStack = [
    { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", level: 95 },
    { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", level: 95 },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", level: 92 },
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", level: 93 },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", level: 90 },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", level: 85 },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", level: 88 },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", level: 85 },
    { name: "PostgreSQL", logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg", level: 80 },
    { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", level: 82 },
    { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", level: 94 },
    { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", level: 85 },
    { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", level: 75 },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", level: 90 },
    { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", level: 95 },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", level: 80 },
    { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", level: 85 },
    { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", level: 88 },
    { name: "Postman", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", level: 90 },
    { name: "MS Office", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Microsoft_Office_logo_%282013%E2%80%932019%29.svg", level: 85 },
    { name: "Canva", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Canva_logo.svg", level: 90 },
    { name: "Photoshop", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg", level: 87 },
];

export default function TechPage() {
    return (
        <div className="bg-white min-h-screen px-6 md:px-16 py-20">
            <Container>
                <FadeIn className="flex items-center gap-x-8 mb-20">
                    <h2 className="text-center font-display text-sm font-semibold tracking-wider text-black sm:text-left">
                        Technologies I Work With
                    </h2>
                    <div className="h-px flex-auto bg-neutral-800" />
                </FadeIn>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 border border-gray-200">
                    {techStack.map((tech, index) => (
                        <div
                            key={index}
                            className="group border border-gray-200 p-10 flex flex-col items-center text-center hover:bg-gray-50 transition-all duration-300"
                        >
                            {/* Massive Icon */}
                            <div className="mb-8">
                                <Image
                                    src={tech.logo}
                                    alt={tech.name}
                                    width={140}
                                    height={140}
                                    className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain group-hover:grayscale-0 transition duration-300 opacity-80 hover:opacity-100 hover:scale-110"
                                    unoptimized
                                />
                            </div>

                            {/* Name */}
                            <h2 className="text-xl font-semibold mb-4 text-neutral-600">
                                {tech.name}
                            </h2>

                            {/* Skill Level Bar */}
                            <div className="w-full max-w-xs">
                                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-neutral-600 transition-all duration-700"
                                        style={{ width: `${tech.level}%` }}
                                    />
                                </div>
                                <p className="text-sm text-gray-500 mt-2">
                                    {tech.level}% Proficiency
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}
