import { contactInfo, socialLinks } from "@/data/data";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export function Footer() {
  return (
    <footer id="contact" className="bg-footerColor text-white py-10">
      <div className="container flex justify-between items-end">
        <div className="flex flex-col md:gap-8 gap-4">
          <h3 className="md:text-4xl text-2xl font-medium">Contacts</h3>
          <div className="flex flex-col md:gap-4 gap-2">
            <Link href={`${contactInfo.email}`} className="md:text-xl">
              Email : {contactInfo.email}
            </Link>
            <Link href={`${contactInfo.phone}`} className="md:text-xl">
              Phone : {contactInfo.phone}
            </Link>
          </div>
        </div>
        <div className="text-lg flex items-center md:gap-8 gap-4">
          <Link href={socialLinks.linkedIn} target="_blank">
            <FaLinkedin size={32} />
          </Link>
          <Link href={socialLinks.github} target="_blank">
            <FaGithub size={32} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
