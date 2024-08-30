import Image from 'next/image';
import Footer from '../component/footer';
import Nav from '../component/nav';

export default function About(){
    return(
        <div className="flex flex-col min-h-screen">
            <Nav/>
            <main className="flex-grow px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl sm:text-4xl font-bold text-center mt-8 mb-10">About Me</h1>
                
                <div className="flex flex-col md:flex-row items-center justify-around gap-8">
                    <div className="w-full md:w-1/2 flex justify-center">
                        <Image
                            src="/african2-removebg-preview.png"
                            alt="Nissi Oyere"
                            width={300}
                            height={200}
                            className="max-w-full h-auto rounded-full shadow-lg shadow-green-500/25"
                        />
                    </div>
                    <div className="w-full md:w-1/2 space-y-6">
                        <div className="text-sm sm:text-base">
                            I am a passionate and skilled full-stack developer with deep expertise in both frontend and backend development, complemented by strong competencies in project management, design, relational databases, and data analysis. My degree in software engineering from CFI CIRAS has provided me with a solid technical foundation, enabling me to design and implement comprehensive and efficient solutions, from intuitive user interfaces to sophisticated backend systems and insightful data-driven analytics.
                        </div>
                        <div className="text-sm sm:text-base">
                            Driven by a commitment to continuous improvement and innovation, I am dedicated to mastering the latest technologies in cloud computing, artificial intelligence, and advanced data analysis. My focus is on leveraging these tools to develop scalable, cutting-edge applications that meet real-world challenges. Looking ahead, I am committed to creating pioneering solutions that seamlessly integrate advanced technology with user-centered design and meaningful data insights, contributing to projects that make a significant impact.
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    )
}