import { MyProjects } from "./components/MyProjects";

export default function Home() {
    return (
        <>
            <span className='text-4xl'>👋</span>
            <h1 className='lg:text-4xl md:text-xl text-[#AEAEAE] text-base font-bold'>
                Hello there! I&apos;m Shivam
            </h1>
            <p className='text-sm lg:text-base font-normal max-w-xl mt-4'>
                I&apos;m a full-stack developer that loves{" "}
                <span className='bg-neutral-700 px-1 py-0.5 rounded-lg'>
                    building projects
                </span>{" "}
                and web apps that can impact millions of lives.
            </p>
            <p className='text-sm lg:text-base font-normal max-w-xl mt-4'>
                I have been building scalable web apps that are performance
                optimised and have stunning designs.
            </p>
            <h2 className='lg:text-2xl md:text-lg text-[#AEAEAE] text-base font-semibold mb-4 mt-20'>
                What I&apos;ve been working on
            </h2>
            <MyProjects />
            <h2 className='lg:text-2xl md:text-lg text-[#AEAEAE] text-base font-semibold mb-4 mt-20'>
                What I&apos;ve been working on
            </h2>
            <div className='grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-3'>
                <p className='bg-gray-950 hover:text-white hover:opacity-75 rounded-full py-3 px-4 text-primary text-sm sm:text-md text-center'>
                    NextJs
                </p>
                <p className='bg-gray-950 hover:text-white hover:opacity-75 rounded-full py-3 px-4 text-primary text-sm sm:text-md text-center'>
                    ReactJs
                </p>
                <p className='bg-gray-950 hover:text-white hover:opacity-75 rounded-full py-3 px-4 text-primary text-sm sm:text-md text-center'>
                    ExpressJS
                </p>
                <p className='bg-gray-950 hover:text-white hover:opacity-75 rounded-full py-3 px-4 text-primary text-sm sm:text-md text-center'>
                    PostgreSQL
                </p>
                <p className='bg-gray-950 hover:text-white hover:opacity-75 rounded-full py-3 px-4 text-primary text-sm sm:text-md text-center'>
                    Cloudflare
                </p>
                <p className='bg-gray-950 hover:text-white hover:opacity-75 rounded-full py-3 px-4 text-primary text-sm sm:text-md text-center'>
                    MongoDB
                </p>
                <p className='bg-gray-950 hover:text-white hover:opacity-75 rounded-full py-3 px-4 text-primary text-sm sm:text-md text-center'>
                    Typescript
                </p>
                <p className='bg-gray-950 hover:text-white hover:opacity-75 rounded-full py-3 px-4 text-primary text-sm sm:text-md text-center'>
                    Empty
                </p>
                <p className='bg-gray-950 hover:text-white hover:opacity-75 rounded-full py-3 px-4 text-primary text-sm sm:text-md text-center'>
                    Docker
                </p>
                <p className='bg-gray-950 hover:text-white hover:opacity-75 rounded-full py-3 px-4 text-primary text-sm sm:text-md text-center'>
                    AWS
                </p>
                <p className='bg-gray-950 hover:text-white hover:opacity-75 rounded-full py-3 px-4 text-primary text-sm sm:text-md text-center'>
                    Github
                </p>
                <p className='bg-gray-950 hover:text-white hover:opacity-75 rounded-full py-3 px-4 text-primary text-sm sm:text-md text-center'>
                    Python
                </p>
            </div>
        </>
    );
}
