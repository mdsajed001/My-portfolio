import Link from "next/link";
import { socialLinks } from "@/data/data";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

export function Navbar() {
  return (
    <nav className="container bg-primary md:px-16 px-6 py-4 rounded-2xl flex items-center justify-between">
      <h1 className="md:text-3xl text-lg font-semibold uppercase">Md Sajed</h1>
      <ul className="flex items-center md:gap-16 gap-4 md:text-xl font-semibold">
        <Link href={"#project"}>Projects</Link>
        <Link href={"#contact"}>Contacts</Link>
      </ul>
      <ul className="text-2xl md:flex items-center gap-4 hidden">
        <Link href={socialLinks.linkedIn} target="_blank">
          <FaLinkedin size={32} />
        </Link>
        <Link href={socialLinks.github} target="_blank">
          <FaGithub size={32} />
        </Link>
      </ul>
    </nav>
  );
}
