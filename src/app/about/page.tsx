import Image from 'next/image';
import Footer from '../component/footer';
import Nav from '../component/nav';

export default function About(){
    return(
        <div>
            <Nav/>
            <h1 className="flex text-4xl font-bold justify-center mt-10">About Me</h1>
            
            <div className="flex flex-row items-center justify-around m-10">
                <Image
                src="/african2-removebg-preview.png"
                alt="Nissi Oyere"
                width={1950}
                height={250}
                />
                <div>
            <div className="block items-center justify-center m-5">
                I am a passionate and skilled full-stack developer with deep expertise in both frontend and backend development, complemented by strong competencies in project management, design, relational databases, and data analysis. My degree in software engineering from CFI CIRAS has provided me with a solid technical foundation, enabling me to design and implement comprehensive and efficient solutions, from intuitive user interfaces to sophisticated backend systems and insightful data-driven analytics
            </div>
            <div className="block items-center justify-center mt-10 ml-10 m-5">
              Driven by a commitment to continuous improvement and innovation, I am dedicated to mastering the latest technologies in cloud computing, artificial intelligence, and advanced data analysis. My focus is on leveraging these tools to develop scalable, cutting-edge applications that meet real-world challenges. Looking ahead, I am committed to creating pioneering solutions that seamlessly integrate advanced technology with user-centered design and meaningful data insights, contributing to projects that make a significant impact.  </div>
            </div>
            </div>
            <Footer/>
        </div>
    )
}