"use client"; // This is a client component

import { useState } from "react";
import { SideBar } from "./SideBar";

export const SideBarWrapper = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <>
            {/* Sidebar container */}
            <div
                className={`fixed inset-0 lg:static lg:flex w-64 lg:w-auto transition-transform transform pt-2 lg:pt-0 ${
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                } lg:translate-x-0 lg:relative z-50 lg:z-auto`}
            >
                <SideBar closeSidebar={closeSidebar} />
            </div>

            {/* Toggle button for mobile */}
            <button
                className='lg:hidden fixed top-4 left-4 z-50 text-white'
                onClick={toggleSidebar}
            >
                {isSidebarOpen ? (
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='size-6'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M3.75 9h16.5m-16.5 6.75h16.5'
                        />
                    </svg>
                ) : (
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='size-6'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                        />
                    </svg>
                )}
            </button>

            {/* Overlay for mobile */}
            {isSidebarOpen && (
                <div
                    className='fixed inset-0 bg-black bg-opacity-95 lg:hidden'
                    onClick={toggleSidebar}
                ></div>
            )}
        </>
    );
};
