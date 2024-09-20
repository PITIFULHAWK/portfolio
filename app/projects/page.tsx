import { MyProjects } from "../components/MyProjects";

export const metadata = {
    title: "Projects | Shivam Sourav",
    description: "Created by Shivam",
  };

export default function ProjectsPage() {
  return (
      <>
          <span className='text-4xl'>⚡</span>
          <h1 className='lg:text-4xl md:text-xl text-[#AEAEAE] text-base font-semibold mb-5'>
              What I&apos;ve been working on
          </h1>
          <MyProjects/>
      </>
  );
}