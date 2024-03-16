"use client";
import { Circle } from "@/components/svg/circle";
import { Pentagon } from "@/components/svg/pentagon";
import { Poop } from "@/components/svg/poop";
import { Rectangle } from "@/components/svg/rectangle";
import { MdEmail } from "react-icons/md";

export function Banner() {
  const handleClick = () => {
    window.location.href =
      "mailto:mdsajed001@gmail.com?subject=Trying to reach you about work&body=Please type your message";
  };
  return (
    <section className="container mt-12 flex pb-8 md:pb-0">
      <div className="md:space-y-24 space-y-16">
        <div className="md:space-y-16 space-y-8">
          <h1 className="text-primary font-bold text-center md:text-start md:text-5xl text-3xl">
            UI/UX Designer
          </h1>
          <p className="text-white font-light my-6 max-w-[700px] md:text-xl text-center md:text-start">
            Committed to enhancing user experiences, eager to contribute. I aim
            to work with a team to polish my skills and learn with them every
            day. Want to make an inspiring design to improve my career.
          </p>
        </div>
        <button
          onClick={handleClick}
          className="bg-primary flex items-center gap-2 rounded-2xl md:px-8 px-5 md:py-4 py-3 md:text-2xl text-lg font-semibold mx-auto md:ms-0"
        >
          Contact me
          <MdEmail className="md:hidden" size={24} />
          <MdEmail className="hidden md:flex" size={32} />
        </button>
      </div>
      <div className="hidden md:block relative flex-1">
        <Rectangle className="absolute bottom-44 right-48" />
        <Circle className="absolute bottom-0 right-80" />
        <Pentagon className="absolute bottom-72 right-0" />
        <Poop className="absolute bottom-0 right-0" />
      </div>
    </section>
  );
}
