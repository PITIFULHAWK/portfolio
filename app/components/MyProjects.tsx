import Image from "next/image";

export const MyProjects = () => {
    return (
        <div>
            <div className='opacity-100 transform-none'>
                <a
                    href='#'
                    className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 hover:bg-gray-900 rounded-2xl transition duration-200 p-4'
                >
                    <Image
                        className='rounded-lg'
                        src='/images/Screenshot 2024-08-26 152305LOGIN.png'
                        alt='Rounded avatar'
                        width={200}
                        height={200}
                    />
                    <div className='flex flex-col justify-between'>
                        <div>
                            <h4 className='text-[#A9A9A9] font-bold text-lg'>
                                Blog website clone
                            </h4>
                            <p className='font-normal text-sm md:text-sm lg:text-sm mt-2 max-w-xl'>
                                Just a simple blog website where you can write
                                your blogs
                            </p>
                        </div>
                        <div className='flex space-x-2 mt-1 md:mt-0 md:mb-1'>
                            <span className='text-xs  md:text-xs lg:text-xs bg-gray-700 px-1 py-1 rounded-md'>
                                React
                            </span>
                            <span className='text-xs  md:text-xs lg:text-xs bg-gray-700 px-1 py-1 rounded-md'>
                                CloudFlare
                            </span>
                            <span className='text-xs  md:text-xs lg:text-xs bg-gray-700 px-1 py-1 rounded-md'>
                                Postgres
                            </span>
                        </div>
                    </div>
                </a>
                <a
                    href='#'
                    className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 hover:bg-gray-900 rounded-2xl transition duration-200 p-4'
                >
                    <Image
                        className='rounded-lg'
                        src='/images/Screenshot 2024-09-18 153728.png'
                        alt='Rounded avatar'
                        width={200}
                        height={200}
                    />
                    <div className='flex flex-col justify-between'>
                        <div>
                            <h4 className='text-[#A9A9A9] font-bold text-lg'>
                                To-Do Web App
                            </h4>
                            <p className='font-normal text-sm md:text-sm lg:text-sm mt-2 max-w-xl'>
                                A simple Todo web app where users can sign in,
                                create tasks, and delete them when completed.
                            </p>
                        </div>
                        <div className='flex space-x-2 mt-1 md:mt-0 md:mb-1'>
                            <span className='text-xs  md:text-xs lg:text-xs bg-gray-700 px-1 py-1 rounded-md'>
                                React
                            </span>
                            <span className='text-xs  md:text-xs lg:text-xs bg-gray-700 px-1 py-1 rounded-md'>
                                Express
                            </span>
                            <span className='text-xs  md:text-xs lg:text-xs bg-gray-700 px-1 py-1 rounded-md'>
                                MongoDb
                            </span>
                        </div>
                    </div>
                </a>
                <a
                    href='#'
                    className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 hover:bg-gray-900 rounded-2xl transition duration-200 p-4'
                >
                    <Image
                        className='rounded-lg'
                        src='/images/Screenshot 2024-09-18 173111.png'
                        alt='Rounded avatar'
                        width={200}
                        height={200}
                    />
                    <div className='flex flex-col justify-between'>
                        <div>
                            <h4 className='text-[#A9A9A9] font-bold text-lg'>
                                My Portfolio
                            </h4>
                            <p className='font-normal text-sm md:text-sm lg:text-sm mt-2 max-w-xl'>
                                A personal portfolio showcasing my skills,
                                projects, and experience, with options to
                                connect and explore my work.
                            </p>
                        </div>
                        <div className='flex space-x-2 mt-1 md:mt-0 md:mb-1'>
                            <span className='text-xs  md:text-xs lg:text-xs bg-gray-700 px-1 py-1 rounded-md'>
                                NextJs
                            </span>
                            <span className='text-xs  md:text-xs lg:text-xs bg-gray-700 px-1 py-1 rounded-md'>
                                React
                            </span>
                            <span className='text-xs  md:text-xs lg:text-xs bg-gray-700 px-1 py-1 rounded-md'>
                                Typescript
                            </span>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
};
