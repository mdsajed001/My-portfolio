"use client";
import { Circle } from "@/components/svg/circle";
import { Pentagon } from "@/components/svg/pentagon";
import { Poop } from "@/components/svg/poop";
import { Rectangle } from "@/components/svg/rectangle";

export function Banner() {
  const handleClick = () => {
    window.location.href =
      "mailto:mdsajed001@gmail.com?subject=Trying to reach you about work&body=Please type your message";
  };
  return (
    <section className="container mt-12 flex">
      <div className="space-y-16">
        <div className="space-y-8">
          <h1 className="text-primary font-bold md:text-5xl text-3xl">
            UI/UX Designer
          </h1>
          <p className="text-white font-light my-6 md:text-xl">
            Committed to enhancing user experiences, eager to contribute <br />{" "}
            I aim to work with a team to polish my skills and learn with them{" "}
            <br /> every day. Want to make an inspiring design to improve my
            career.
          </p>
        </div>
        <button
          onClick={handleClick}
          className="bg-primary rounded-2xl px-5 py-3 md:text-2xl text-lg font-semibold"
        >
          Contact me
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
