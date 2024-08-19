import Link from "next/link";
import Image from "next/image";


export default function Footer(){
    return(
       
    <footer className="p-50  bg-blue-500/25 bg-blur-lg shadow-lg-white mt-10">
    <div  className="flex flex-row items-center justify-around space-x-20 pt-10">
    <div className="">
      <h2 className="mb-2">Contact</h2>
    <div className="font-thin">
    <p>Copyright 2024 Shinny</p>
    <Link href="/">
    <p>shinny@gmail.com</p>
    </Link>
    <p>Congo brazzaville</p>
    </div>
    </div>
    <div className="">
    <h2 className="mb-2">Social Media</h2>
    <div className="font-thin">
      <Link href="https://www.linkedin.com/in/nissi-oyere-a17554262/">
      <p>LinkedIn</p>
      </Link>
      <Link href="https://github.com/Shinny22/Shinny22">
      <p>Github</p>
      </Link>
      <Link href="https://www.facebook.com/profile.php?id=100093188878785">
      <p>Facebook</p>
      </Link>
    </div>
    </div>
    <div className="">
    <h2 className="mb-2">About us</h2>
    <div className="font-thin">
      <p>LinkedIn</p>
      <p>Github</p>
      <p>Facebook</p>
    </div>
    </div>
    </div>
    <div className="flex flex-row items-center justify-center">
      <Image
            src="/logo.png"
            alt="devfolio Logo"
            width={90}
            height={20}
            priority
            />
      <Image
            src="/logo.png"
            alt="devfolio Logo"
            width={90}
            height={20}
            priority
            />
      <Image
            src="/logo.png"
            alt="devfolio Logo"
            width={90}
            height={20}
            priority
            />
      </div>
  </footer>
    )
}