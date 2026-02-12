import Image from "next/image";
import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";

const techStack = [
  ["HTML5", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"],
  ["CSS3", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"],
  ["JavaScript", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"],
  ["React", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"],
  ["Next.js", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"],
  ["Python", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"],
  ["Node.js", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"],
  ["MongoDB", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"],
  ["PostgreSQL", "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg"],
  ["MySQL", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"],
  ["Tailwind CSS", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"],
  ["Bootstrap", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"],
  ["Angular", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"],
  ["Git", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"],
  ["VS Code", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"],
  ["Docker", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"],
  ["Firebase", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"],
  ["Figma", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"],
  ["Postman", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg"],
  ["MS Office", "https://upload.wikimedia.org/wikipedia/commons/0/0c/Microsoft_Office_logo_%282013%E2%80%932019%29.svg"],
  ["Canva", "https://upload.wikimedia.org/wikipedia/commons/b/b8/Canva_logo.svg"],
  ["Photoshop", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg"],
];

const Clients = () => {
  return (
    <div className="mt-24 bg-neutral-950 m-4 py-20 sm:mt-32 sm:py-32 lg:mt-56 rounded-4xl ">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Technologies I Work With
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>

        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-3 gap-x-8 gap-y-12 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6"
          >
            {techStack.map(([name, logo]) => (
              <li key={name} className="flex justify-center">
                <FadeIn>
                  <Image
                    src={logo}
                    alt={name}
                    width={48}
                    height={48}
                    className="opacity-80 transition duration-300 hover:opacity-100 hover:scale-110"
                    unoptimized
                  />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  );
};

export default Clients;
