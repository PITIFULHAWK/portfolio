import {
  GithubIcon,
  LinkedinIcon,
  XIcon,
  MailIcon,
} from "./Icons";

export const MenuItem2 = () => {
    return (
        <div className='text-white text-sm'>
            <a
                className='flex p-2 hover:bg-[#1F2937] rounded-lg  cursor-pointer'
                href='https://github.com/PITIFULHAWK'
                target='_blank'
            >
                <p className='focus:text-blue-600 flex justify-center items-center mr-2'>
                    {GithubIcon}
                </p>
                Github
            </a>
            <a
                className=' flex p-2 mt-1 hover:bg-[#1F2937] rounded-lg  cursor-pointer'
                href='https://www.linkedin.com/in/shivam-sourav-7b99832ba/'
                target='_blank'
            >
                <p className='focus:text-blue-600 flex justify-center items-center mr-2'>
                    {LinkedinIcon}
                </p>
                LinkedIn
            </a>
            <a
                className='flex p-2 mt-1 hover:bg-[#1F2937] rounded-lg cursor-pointer'
                href='https://x.com/sourav_shi7274'
                target='_blank'
            >
                <p className='focus:text-blue-600 flex justify-center items-center mr-2'>
                    {XIcon}
                </p>
                X
            </a>
            <a
                className='flex p-2 mt-1 hover:bg-[#1F2937] rounded-lg cursor-pointer'
                href='mailto:sxxxxxs1973@gmail.com'
                target='_blank'
            >
                <p className='focus:text-blue-600 flex justify-center items-center mr-2'>
                    {MailIcon}
                </p>
                Mail
            </a>
        </div>
    );
};