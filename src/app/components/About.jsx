import { about, certifications, education } from "../../data/data";

export default function About() {
    return (
        <>
            <div className="flex flex-col gap-2 mt-10 scroll-mt-14" id="about">
                <h2 className="text-xl font-medium before:content-['>'] before:mr-1">
                    About
                </h2>
                <div className="flex gap-2 flex-col">
                    <p className="text-base text-base-content/80">{about.about}</p>
                    <ul className="list-disc pl-5 text-base text-base-content/80 space-y-1">
                        {certifications.map((line, i) => (
                            <li key={i}>{line}</li>
                        ))}
                    </ul>
                    <div className="mt-2 space-y-3">
                        <h3 className="text-sm font-semibold uppercase tracking-wide text-base-content/50">
                            Education
                        </h3>
                        {education.map((ed, i) => (
                            <div key={i} className="text-base text-base-content/80">
                                <p className="font-medium text-base-content">
                                    {ed.school}{" "}
                                    <span className="font-normal text-base-content/60">
                                        ({ed.location})
                                    </span>
                                </p>
                                <p>{ed.credential}</p>
                                <p className="text-sm">{ed.focus}</p>
                                <p className="text-sm text-base-content/60">{ed.note}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-base text-base-content/80">
                        I am available for any questions or opportunities at {" "}
                        <a
                            href={`mailto:${about.email}`}
                            className="font-medium text-primary hover:underline"
                        >
                            {about.email}
                        </a>
                         
                    </p>
                </div>
            </div>
        </>
    );
}
