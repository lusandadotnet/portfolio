"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [hideOnMobile, setHideOnMobile] = useState(true);
    const pathname = usePathname();
    const blogs = pathname === "/blogs";

    return (
        <>
            <div className="flex justify-center sticky top-2 items-center gap-[25px] w-full z-10">
                <div className="w-[70%] sm:w-[80%] border border-base-content/10 flex items-center sm:justify-center justify-end bg-base-100/70 backdrop-blur-sm rounded-3xl py-2 px-4 shadow-sm">
                    <div className="flex items-center sm:gap-8 gap-5">
                        <div className="flex items-center gap-4">
                            <ul
                                className={`w-[90%] sm:w-full sm:flex-row flex-col sm:bg-transparent bg-base-200 backdrop-blur-sm sm:static fixed top-12 left-[5%] rounded-2xl sm:border-transparent
                                         border mx-auto items-center text-base sm:p-0 p-2 gap-2 sm:gap-4 ${
                                             hideOnMobile ? "hidden" : "flex"
                                         } sm:flex`}
                            >
                                <li>
                                    <Link href="/#about" className="hover:underline">
                                        About
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/#education" className="hover:underline">
                                        Education
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/#projects" className="hover:underline">
                                        Projects
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/#stack" className="hover:underline">
                                        Stack
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="https://github.com/lusandadotnet/resume-pdf/blob/main/lusanda-ndlovu-cv.pdf"
                                        className="text-green-950 font-medium hover:underline"
                                        target="_blank"
                                    >
                                        Download Resume
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        
                        {/* Mobile Menu Toggle remains here */}
                        <div className="flex items-center gap-2 sm:hidden">
                            <button
                                onClick={() => setHideOnMobile(!hideOnMobile)}
                            >
                                <span className="material-symbols-outlined">
                                    menu
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}