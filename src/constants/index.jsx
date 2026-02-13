import { SocialMediaProfiles } from "@/components/SocialMedia";

export const navigation = [
  {
    title: "Work",
    links: [
      { title: "Portfolio Website", href: "/work/portfolio" },
      { title: "E-Commerce App", href: "/work/ecommerce" },
      { title: "Blog Platform", href: "/work/blog-platform" },
      {
        title: (
          <>
            See all projects <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: "/projects",
      },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About Me", href: "/about" },
      { title: "My Education", href: "/process" },
      { title: "Resume", href: "/resume" },
      { title: "Connect With Me", href: "/contact" },
    ],
  },
  {
    title: "Connect",
    links: SocialMediaProfiles, // e.g., GitHub, LinkedIn, Twitter
  },
];
