import Marquee from "./Marquee";
import { skills } from "@/data/data";

export default function TechLists() {
    return (
        // Add the id here and scroll-mt for better spacing when jumping to this section
        <div id="stack" className="mt-10 scroll-mt-10">
             <h2 className="text-xl font-medium before:content-['>'] before:mr-1">Tech Stack</h2>
            <Marquee duration="25s">
                <div className="flex gap-8 mt-4">
                    {[...skills, ...skills].map((skill, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center gap-2 w-[80px] p-2"
                        >
                            <div className="border-2 p-2 border-base-content/15 bg-base-200/80 shadow-sm rounded-sm">
                                <img
                                    src={`${skill.icon}`}
                                    className="w-10 h-10"
                                    alt={`${skill.alt}`}
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                            <span className="text-sm">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </Marquee>
        </div>
    );
}