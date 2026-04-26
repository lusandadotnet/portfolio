import React from "react";
import { about, seo } from "@/data/data";

export const metadata = {
    title: `Contact Me | ${seo.title}`,
    description: "Get in touch with me to discuss projects, collaborations, or just to say hello.",
    keywords: "contact, get in touch, collaboration, email, message, web developer"
};

function Contact() {
    return (
        <>
            <div className="md:w-[700px] w-[100%] mt-5 p-4">
                <main className="flex flex-col gap-2">
                    <h1 className="text-xl font-medium before:content-['>'] before:mr-1">
                        Contact Me
                    </h1>
                    <div className="p-1 mt-2">
                        <p className="text-base-content/80">
                            Feel free to reach out via email:
                        </p>
                        <a 
                            href={`mailto:${about.email}`}
                            className="text-primary hover:underline text-lg mt-2 block"
                        >
                            {about.email}
                        </a>
                    </div>
                </main>
            </div>
        </>
    );
}

export default Contact;
