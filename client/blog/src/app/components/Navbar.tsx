'use client'
import { useState } from "react"
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa" 

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen)
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

  return (
    <nav className="bg-orange-950 w-full p-4 sticky top-0 drop-shadow-xl z-10">

        <div className="md:hidden">
            {mobileMenuOpen ? (
                <button onClick={closeMobileMenu} className="text-white/90 focus:outline-none">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-10"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            ) : (
            <button className="text-white/90 focus:outline-none" onClick={toggleMobileMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
               </svg>
            </button>
            )}
            
        </div>
        <div className="mx-auto justify-between px-4 md:items-center flex md:flex md:px-2">
            {mobileMenuOpen && ( // Conditionally render for small and medium screens when menu is open
                    <div className={`flex flex-row justify-evenly gap-2 text-white text-xl mt-2 hidden`}>
                        <Link className="linkIcon" href=""> <FaFacebook/> </Link>
                        <Link className="linkIcon" href=""> <FaTwitter/> </Link>
                        <Link className="linkIcon" href=""> <FaInstagram/> </Link>
                        <Link className="linkIcon" href=""> <FaYoutube/> </Link>
                        <Link className="linkIcon" href=""> <FaTiktok/> </Link>
                    </div>
                )}
                {/* Display social media icons for larger screens after md breakpoint */}
                <div className={`hidden md:flex md:flex-row justify-evenly gap-2 text-white text-xl mt-2`}>
                    <Link className="linkIcon" href=""> <FaFacebook/> </Link>
                    <Link className="linkIcon" href=""> <FaTwitter/> </Link>
                    <Link className="linkIcon" href=""> <FaInstagram/> </Link>
                    <Link className="linkIcon" href=""> <FaYoutube/> </Link>
                    <Link className="linkIcon" href=""> <FaTiktok/> </Link>
                </div>

            <h1 className={`text-4xl font-bold text-white pl-24 md:pl-10 mb-0 md:mb-0 ${mobileMenuOpen ? 'hidden' : 'block'}`}>
            <Link href="/" className="text-white/90 no-underline hover:text-white font-dancing">AmaBlog</Link>
            </h1>

            <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${mobileMenuOpen ? 'p-4 md:p-0 block' : 'hidden'}`}>
                <div className="flex md:flex-row flex-col items-center  md:mx-auto h-screen md:h-auto ltr mt-2">
                <Link href="/" className="linkCat"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>Home</Link>
                <div className="relative inline-block text-white group">
                    <Link href="/"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="linkCat hover:text-white">Categories</Link>
                    <div className="hidden group-hover:block absolute space-y-4 bg-white px-6 py-6 gap-4 w-36 top-full left-16">
                        <Link href="#" className="block text-black hover:text-white hover:bg-blue-400">Music</Link>
                        <Link href="#" className="block text-black hover:text-white hover:bg-blue-400 ">Movies</Link>
                        <Link href="#" className="block text-black hover:text-white hover:bg-blue-400">Sports</Link>
                        <Link href="#" className="block text-black hover:text-white hover:bg-blue-400">Politics</Link>
                        <Link href="#" className="block text-black hover:text-white hover:bg-blue-400">Food</Link>
                    </div>
                </div>
                <Link href="/" className="linkCat"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>About</Link>
                <Link href="/" className="linkCat"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>Contact</Link>
                </div>
            </div>

            <div className="inline-block relative ltr ml-14 md:ml-20 lg:ml-48 ">
                <input className="w-36 md:w-44 lg:52 p-2.5 border-0 rounded-3xl shadow" placeholder="Search..." type="text" />
                <button className="border-0 bg-orange-700 text-white cursor-pointer pl-3 pr-5 rounded-2xl shadow absolute top-0 right-0 h-11 transition duration-150 ease-out hover:ease-in hover:bg-orange-900" type="submit">Go</button>
            </div>
        </div>   
    </nav>
  )
}
