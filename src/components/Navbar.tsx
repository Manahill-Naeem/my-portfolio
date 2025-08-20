import Link from "next/link"

export default function (){
    return(
        <nav className="fixed top-0 left-0 w-full z-10 backdrop-blur-sm shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold">My Portfolio</h1>
                </div>
                <div className="flex justify-between items-center">
                    <Link href="#about" className="hover-text-blue px-4 py-2">About</Link>
                    <Link href="#education" className="hover-text-blue px-4 py-2 ">Education</Link>
                    <Link href="#experience" className="hover-text-blue px-4 py-2">Experience</Link>
                    <Link href="#skills" className="hover-text-blue px-4 py-2">Skills</Link>
                    <Link href="#projects" className="hover-text-blue px-4 py-2">Projects</Link>
                    <Link href="#contact" className="hover-text-blue px-4 py-2">Contact</Link>
                </div>
            </div>
        </nav>
    )
}