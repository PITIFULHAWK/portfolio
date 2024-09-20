import localFont from "next/font/local";
import "./globals.css";
import { SideBarWrapper } from "./components/SideBarWrapper"; // Import new Client Component

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});

const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <div className='bg-[#030712] w-screen h-screen flex'>
                    {/* Render the Client Component for the sidebar */}
                    <SideBarWrapper />

                    <div className='lg:pl-2 lg:pb-1 lg:pt-2 flex-1 overflow-y-auto'>
                        <div className='flex-1 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 min-h-screen lg:rounded-xl border border-transparent lg:border-gray-700 overflow-y-auto flex flex-col mr-0 lg:mr-2'>
                            <main className='flex-grow max-w-4xl w-full mx-auto py-20 px-4 md:px-10 text-white'>
                                {children}
                            </main>

                            <div className='p-4 text-center justify-center text-xs text-neutral-500 border-t border-gray-700'>
                                <span className='font-semibold'>2024</span>{" "}—
                                Built by{" "}
                                <a
                                    target='_blank'
                                    href='https://x.com/sourav_shi7274'
                                >
                                    Shivam Sourav
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}
