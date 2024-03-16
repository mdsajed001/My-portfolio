import Link from "next/link";
import { socialLinks } from "@/data/data";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

export function Navbar() {
  return (
    <nav className="container bg-primary px-16 py-4 rounded-2xl flex items-center justify-between">
      <h1 className="text-3xl font-semibold uppercase">Md Sajed</h1>
      <ul className="flex items-center gap-16 text-xl font-semibold">
        <Link href={"#project"}>Projects</Link>
        <Link href={"#contact"}>Contacts</Link>
      </ul>
      <ul className="text-2xl flex items-center gap-4">
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
