import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaFacebook, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-blue-500/25 bg-blur-lg shadow-lg-white mt-10 py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div>
                        <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Contact</h2>
                        <div className="space-y-2">
                            <p className="text-xs sm:text-sm">Copyright 2024 Shinny</p>
                            <Link href="mailto:shinny@gmail.com" className="flex items-center text-xs sm:text-sm hover:text-blue-600">
                                <FaEnvelope className="mr-2" />
                                <span>shinny@gmail.com</span>
                            </Link>
                            <p className="flex items-center text-xs sm:text-sm">
                                <FaMapMarkerAlt className="mr-2" />
                                <span>Congo brazzaville</span>
                            </p>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Social Media</h2>
                        <div className="space-y-2">
                            {[
                                { href: "https://www.linkedin.com/in/nissi-oyere-a17554262/", icon: FaLinkedin, label: "LinkedIn" },
                                { href: "https://github.com/Shinny22/Shinny22", icon: FaGithub, label: "Github" },
                                { href: "https://www.facebook.com/profile.php?id=100093188878785", icon: FaFacebook, label: "Facebook" }
                            ].map((social, index) => (
                                <Link key={index} href={social.href} className="flex items-center text-xs sm:text-sm hover:text-blue-600">
                                    <social.icon className="mr-2" />
                                    <span>{social.label}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">About us</h2>
                        <div className="space-y-2 text-xs sm:text-sm">
                            <p>Professional Experience</p>
                            <p>Professionnal Target </p>
                            <p>Main Goal</p>
                        </div>
                    </div>
                </div>
                <div className="mt-6 sm:mt-8 flex justify-center">
                    <Image
                        src="/logo.png"
                        alt="devfolio Logo"
                        width={70}
                        height={20}
                        className="w-auto h-auto"
                        priority
                    />
                </div>
            </div>
        </footer>
    )
}