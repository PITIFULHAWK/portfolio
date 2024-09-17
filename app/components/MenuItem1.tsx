"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    HomeIcon,
    AboutIcon,
    ProjectsIcon,
    ContributionsIcon,
    ArticlesIcon,
} from "./Icons";

export const MenuItem1 = () => {
    const pathname = usePathname();
    return (
        <div className='text-white text-sm'>
            <Link href='/'>
                <div
                    className={`flex p-2 rounded-lg cursor-pointer ${
                        pathname === "/" ? "bg-[#1F2937]" : ""
                    }`}
                >
                    <p
                        className={`flex justify-center items-center mr-2 ${
                            pathname === "/" ? "text-blue-600" : ""
                        }`}
                    >
                        {HomeIcon}
                    </p>
                    Home
                </div>
            </Link>
            <Link href='/about'>
                <div
                    className={`flex p-2 mt-1 rounded-lg cursor-pointer ${
                        pathname === "/about" ? "bg-[#1F2937]" : ""
                    }`}
                >
                    <p
                        className={` flex justify-center items-center mr-2 ${
                            pathname === "/about" ? "text-blue-600" : ""
                        }`}
                    >
                        {AboutIcon}
                    </p>
                    About
                </div>
            </Link>
            <Link href='/projects'>
                <div
                    className={`flex p-2 mt-1 rounded-lg cursor-pointer ${
                        pathname === "/projects" ? "bg-[#1F2937]" : ""
                    }`}
                >
                    <p
                        className={` flex justify-center items-center mr-2 ${
                            pathname === "/projects" ? "text-blue-600" : ""
                        }`}
                    >
                        {ProjectsIcon}
                    </p>
                    Projects
                </div>
            </Link>
            <Link href='/contribution'>
                <div
                    className={`flex p-2 mt-1 rounded-lg cursor-pointer ${
                        pathname === "/contribution" ? "bg-[#1F2937]" : ""
                    }`}
                >
                    <p
                        className={` flex justify-center items-center mr-2 ${
                            pathname === "/contribution" ? "text-blue-600" : ""
                        }`}
                    >
                        {ContributionsIcon}
                    </p>
                    Contributions
                </div>
            </Link>
            <Link href='/articles'>
                <div
                    className={`flex p-2 mt-1 rounded-lg cursor-pointer ${
                        pathname === "/articles" ? "bg-[#1F2937]" : ""
                    }`}
                >
                    <p
                        className={` flex justify-center items-center mr-2 ${
                            pathname === "/articles" ? "text-blue-600" : ""
                        }`}
                    >
                        {ArticlesIcon}
                    </p>
                    Articles
                </div>
            </Link>
        </div>
    );
};
