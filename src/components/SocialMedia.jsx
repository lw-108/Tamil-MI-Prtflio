import Link from "next/link";
import clsx from "clsx";
import {
  BsFacebook,
  BsTwitter,
  BsGithub,
  BsYoutube,
  BsLinkedin,
} from "react-icons/bs";
import { SiGmail } from "react-icons/si";


export const SocialMediaProfiles = [
  { title: "GitHub", href: "https://github.com/TAMILARASAN-MI", icon: BsGithub },
  {
    title: "linkedin",
    href: "https://www.linkedin.com/in/tamil-mi/",
    icon: BsLinkedin,
  },
  {
    title: "EMail",
    href: "mailto:tamilmi2004@gmail.com",
    icon: SiGmail,
  },
];

const SocialMedia = ({ className, invert = false }) => {
  return (
    <ul
      role="list"
      className={clsx(
        "flex gap-x-10",
        invert ? "text-white" : "text-neutral-950",
        className
      )}
    >
      {SocialMediaProfiles.map((item) => (
        <li key={item.title}>
          <Link
            href={item.href}
            aria-label={item.title}
            className={clsx(
              "transition",
              invert ? "hover:text-neutral-200" : "hover:text-neutral-700"
            )}
          >
            <item.icon className="h-6 w-6 fill-current" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;
