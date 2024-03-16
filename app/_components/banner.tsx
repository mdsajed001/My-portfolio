"use client";
import { Circle } from "@/components/svg/circle";
import { Pentagon } from "@/components/svg/pentagon";
import { Poop } from "@/components/svg/poop";
import { Rectangle } from "@/components/svg/rectangle";

export function Banner() {
  const handleClick = () => {
    window.location.href =
      "mailto:recipient@example.com?subject=Subject Text&body=Message Body";
  };
  return (
    <section className="container mt-12 flex">
      <div className="space-y-24">
        <div className="space-y-16">
          <h1 className="text-primary font-bold text-5xl">UI/UX Designer</h1>
          <p className="text-white font-light my-6 text-xl">
            Committed to enhancing user experiences, eager to contribute <br />{" "}
            creativity, and driven to create compelling UI designs. I had the{" "}
            <br /> opportunity to collaborate with frontend developers.
          </p>
        </div>
        <button
          onClick={handleClick}
          className="bg-primary rounded-2xl px-8 py-4 text-2xl font-semibold"
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
