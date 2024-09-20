export const metadata = {
    title: "Articles | Shivam Sourav",
    description: "Created by Shivam",
  };

export default function ArticlePage() {
    return (
        <>
            <span className='text-4xl'>📝</span>
            <h1 className='lg:text-4xl md:text-xl text-[#AEAEAE] text-base font-bold'>
                My Articles
            </h1>
            <p className='text-sm lg:text-base font-normal max-w-xl mt-4'>
                Ever since I was a kid, I&apos;ve been fascinated by technology.
            </p>
            <h2 className='lg:text-2xl md:text-lg text-[#AEAEAE] text-base font-semibold mb-4 mt-20'>
                No Articles writen.
            </h2>
        </>
    );
}
