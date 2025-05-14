// File: app/page.tsx

import Image from "next/image";
import Link from "next/link";
import Nav from "./component/nav";
import Footer from "./component/footer";

export default function Home() {
  return (
    <>
      <Nav />
      {/* Hero Section */}
      <section className="flex min-h-screen flex-col items-center justify-center px-4 sm:px-8 mb-12 bg-gradient-to-br from-white via-gray-100 to-blue-50 border-b border-gray-200">
        <div className="w-full max-w-6xl mx-auto font-mono text-sm">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {/* Intro Text */}
            <div className="text-center md:text-left md:max-w-xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-gray-800">
                Hello, I'm <br />
                <span className="text-emerald-600">Gloire Nissi OYERE</span>
              </h1>
              <p className="mb-6 text-lg sm:text-xl text-gray-600">Full Stack Developer</p>
              <p className="text-base text-gray-500 mb-6 leading-relaxed">
                Welcome to my portfolio! I'm a full-stack developer passionate about building innovative, scalable solutions by constantly learning and refining my skills.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <Link href="/cv">
                  <button className="px-6 py-2 border-2 border-emerald-500 rounded-lg hover:bg-emerald-500 hover:text-white text-black transition-all duration-300">
                    Download CV
                  </button>
                </Link>
                <button className="px-6 py-2 bg-emerald-200 text-gray-800 rounded-lg hover:bg-emerald-400 hover:text-white transition-all duration-300">
                  Explore
                </button>
              </div>
            </div>

            {/* Profile Image */}
            <div className="md:flex-shrink-0">
              <Image
                src="/AFRICAN3-removebg-preview.png"
                alt="Gloire Nissi OYERE"
                width={300}
                height={300}
                priority
                className="rounded-full border-4 border-emerald-400 shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="text-center py-16 bg-white">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {[
            { src: "/Connected world-cuate.png", title: "BackEnd" },
            { src: "/Data points-cuate.png", title: "FrontEnd" },
            { src: "/Online world-amico.png", title: "Database" },
            { src: "/Cloud hosting-amico.png", title: "Project Management" }
          ].map((skill, index) => (
            <div key={index} className="bg-blue-100 hover:shadow-lg transition-all duration-300 rounded-lg p-5 flex flex-col items-center">
              <Image src={skill.src} alt={`${skill.title} icon`} width={130} height={130} priority />
              <h3 className="mt-4 font-semibold text-gray-700">{skill.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* About Me Section */}
      <section className="flex flex-col md:flex-row justify-around gap-8 px-4 py-16 bg-gray-50">
        <div className="flex justify-center items-center">
          <Image
            src="/african-preview.png"
            alt="About me image"
            width={250}
            height={250}
            priority
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center md:text-left">About Me</h2>
          <p className="text-gray-600 mb-6 text-justify">
            As a dedicated full-stack developer, I combine technical expertise with a constant passion for learning and sharing knowledge. My journey in front-end and back-end development enables me to design and implement comprehensive solutions, from user interfaces to database management.
          </p>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Technical Skills</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Front-End: React, Next.js, Tailwind CSS, Typescript, Storybook, HTML5, CSS3, Bootstrap</li>
              <li>Back-End: Django, Django REST Framework, Flask, Node.js, Express</li>
              <li>Databases: Oracle, MySQL, Sqlite</li>
              <li>DevOps: Docker, Docker Compose</li>
              <li>Version Control: Git, GitHub</li>
              <li>Others: AWS, Kubernetes, Trello</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <main className="flex flex-col items-center py-16 px-4 bg-white">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">My Projects</h2>
        <p className="mb-10 text-center text-gray-600 max-w-3xl">
          Explore a selection of my key projects showcasing my skills in full-stack development, innovative problem-solving, and user-centered design. Each project represents a unique challenge and demonstrates my ability to deliver robust, scalable solutions.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "LingaFoot", src: "/home5fe.jpg", link: "https://lingafoot.com" },
            { title: "Visit Congo", src: "/Tourisme.png", link: "#" },
            { title: "Todo List", src: "/todo.jpeg", link: "#" },
            { title: "Finexo", src: "/Finexo.jpeg", link: "#" },
            { title: "Immobigrand", src: "/Immo.jpeg", link: "#" },
            { title: "Connect", src: "/dashboard___31_4x.png", link: "#" }
          ].map((project, index) => (
            <div key={index} className="bg-blue-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
              <Link href={project.link}>
                <Image
                  src={project.src}
                  alt={`${project.title} preview`}
                  width={400}
                  height={250}
                  className="w-full h-auto object-cover"
                />
              </Link>
              <h3 className="text-center font-semibold text-gray-700 py-4">{project.title}</h3>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
