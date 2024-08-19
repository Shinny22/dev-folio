import Link from "next/link";
import Image from "next/image";

export default function Nav(){
   return (
    <>
<header>
<nav className="flex justify-around bg-blue-500/25 bg-blur-sm shadow-lg shadow-blue-500/45">
     <Image
        src="/logo.png"
        alt="devfolio Logo"
        width={70}
        height={20}
        priority
        className="rounded-full p-r-20"
        />
  <ul className="flex justify-end space-x-4 p-5">
    <li className="hover:text-blue-500"><Link href="/">Home</Link></li>
    <li className="hover:text-blue-500"><Link href="/about">About</Link></li>
    <li className="hover:text-blue-500"><Link href="/project">Projects</Link></li>
    <li className="hover:text-blue-500"><Link href="/contact">Contact</Link></li>
  </ul>
</nav>
</header>
</>
   )
}