import Image from "next/image";
import { MenuItem1 } from "./MenuItem1";
import { MenuItem2 } from "./MenuItem2";

export const SideBar = () => {
    return (
        <div className='flex py-10 px-6 text-white'>
            <div className='flex flex-col place-content-between '>
                <div>
                    <div className='flex items-center '>
                        <Image
                            className='rounded-full'
                            src='/images/IMG_7146.jpg'
                            alt='Rounded avatar'
                            width={40} // 10 * 4 (Tailwind's w-10 is 2.5rem = 40px)
                            height={40}
                        />
                        <div className='flex justify-center flex-col ml-2'>
                            <h1 className='font-bold text-base text-gray-400'>
                                Shivam Sourav
                            </h1>
                            <p className='font-thin text-sm'>Devloper</p>
                        </div>
                    </div>
                    <div className='py-10'>
                        <MenuItem1 />
                        <div className='font-semibold text-slate-400 pt-10 px-1 text-sm'>
                            Socials
                        </div>
                        <MenuItem2 />
                    </div>
                </div>
                <CvButton />
            </div>
        </div>
    );
};


const CvButton = () => {
    return (
        <a
            className='bg-slate-900 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block'
            href='#'
        >
            <span className='absolute inset-0 overflow-hidden rounded-full '>
                <span className='absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100'></span>
            </span>
            <div className='relative flex space-x-2 items-center z-10 rounded-full bg-transparent py-2 px-4 ring-1 ring-white/10 '>
                <span>Read Resume</span>
                <svg
                    width='16'
                    height='16'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        stroke='currentColor'
                        d='M10.75 8.75L14.25 12L10.75 15.25'
                        pathLength='1'
                        stroke-dashoffset='0px'
                        stroke-dasharray='1px 1px'
                    ></path>
                </svg>
            </div>
            <span className='absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40'></span>
        </a>
    );
};
