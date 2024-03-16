"use client";

import { projects } from "@/data/data";
import { Project } from "./project";
import { useState } from "react";
import { ProjectTypesType } from "@/utils/types";

export function Projects() {
  const [visibleProjects, setVisibleProject] = useState(projects);
  const [selectedProjectType, setSelectedProjectType] =
    useState<ProjectTypesType>("all");

  const handleFilter = (type: ProjectTypesType) => {
    setSelectedProjectType(type);

    switch (type) {
      case "all": {
        setVisibleProject(projects);
        break;
      }
      case "solo": {
        setVisibleProject(
          projects.filter((project) => project.type === "solo")
        );
        break;
      }
      case "team": {
        setVisibleProject(
          projects.filter((project) => project.type === "team")
        );
        break;
      }
      default: {
        setVisibleProject(projects);
      }
    }
  };

  return (
    <section className="container my-16 space-y-16">
      <div className="space-y-8">
        <h1 className="text-primary font-bold text-5xl">My Projects</h1>
        <div className="bg-footerColor p-4 rounded-2xl flex items-center justify-center gap-16 text-white">
          <button
            className="flex items-center text-xl gap-2"
            onClick={() => handleFilter("all")}
          >
            {selectedProjectType === "all" && <ActiveIndicator />}
            All Projects
          </button>

          <button
            className="flex items-center text-xl gap-2"
            onClick={() => handleFilter("solo")}
          >
            {selectedProjectType === "solo" && <ActiveIndicator />}
            Solo Projects
          </button>

          <button
            className="flex items-center text-xl gap-2"
            onClick={() => handleFilter("team")}
          >
            {selectedProjectType === "team" && <ActiveIndicator />}
            Team Projects
          </button>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-16 mt-6">
        {visibleProjects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

function ActiveIndicator() {
  return <span className="bg-primary size-2 rounded-full" />;
}
