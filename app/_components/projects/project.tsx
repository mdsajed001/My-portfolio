import { ProjectType } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";

export function Project({ name, description, type, image, link }: ProjectType) {
  return (
    <Link
      href={link}
      target="_blank"
      className="rounded-2xl overflow-hidden bg-headerBackgroundColor"
    >
      <Image
        className="object-cover object-top"
        src={image}
        alt={name}
        width={600}
        height={600}
      />
      <div className="p-8 space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="md:text-4xl text-2xl font-medium text-primary">
            {name}
          </h1>
          <p className="bg-smallButtonColor px-4 py-2 md:text-xl uppercase rounded-2xl text-white">
            {type}
          </p>
        </div>
        <p className="text-justify mt-3 text-white font-thin md:text-xl">
          {description}
        </p>
      </div>
    </Link>
  );
}
