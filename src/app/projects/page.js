import React from "react";
import { projects, seo } from "@/data/data";
import ProjectCard from "../components/ProjectCard";

export const metadata = {
    title: `Projects | ${seo.title}`,
    description:
        "Projects spanning ASP.NET Core APIs, Azure, Python MCP tooling, and modern web stacks.",
    keywords:
        "projects, ASP.NET Core, Azure, MCP, Python, .NET, REST APIs, serverless",
};

function Projects() {
    return (
        <div className="md:w-[700px] w-[100%] mt-5 p-4">
            <main className="flex flex-col gap-2">
                <h1 className="text-xl font-medium before:content-['>'] before:mr-1">
                    All Projects
                </h1>
                <div className="flex flex-col gap-2">
                    {projects.pinProjects.map((item, index) => (
                        <ProjectCard
                            key={index}
                            item={item}
                            heading="h2"
                        />
                    ))}
                    {projects.otherProjects.map((item, index) => (
                        <ProjectCard
                            key={`other-${index}`}
                            item={item}
                            heading="h2"
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}

export default Projects;
