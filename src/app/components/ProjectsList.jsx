"use client";
import { projects } from "@/data/data";
import Link from "next/link";
import ProjectCard from "./ProjectCard";

export default function ProjectsList() {
    return (
        <div className="mt-10 scroll-mt-14 flex flex-col gap-2" id="projects">
            <div className="flex items-end justify-between">
                <h2 className="text-xl font-medium before:content-['>'] before:mr-1">
                    Projects
                </h2>
                <Link href="/projects" className="text-sm flex underline hover:text-primary">
                    See All
                </Link>
            </div>
            <div className="flex flex-col gap-2">
                {projects.pinProjects.map((item, index) => (
                    <ProjectCard key={index} item={item} heading="h3" />
                ))}
            </div>
        </div>
    );
}
