import Image from "next/image";
import Link from "next/link";
import Nav from "./component/nav";
import Footer from "./component/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <section className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 mb-8 sm:mb-15 border-b-2 border-blue-500/25">
        <div className="w-full max-w-6xl mx-auto font-mono text-sm">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-12 lg:gap-16">
            <div className="text-center md:text-left md:max-w-xl mt-10">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
                Hello, I'm<br /> 
                <span className="text-green-500/75">Gloire Nissi OYERE</span>
              </h1>
              <p className="mb-4 sm:mb-6 text-lg sm:text-xl text-gray-600">Full Stack Developer</p>
              <div className="text-sm sm:text-base mb-6">
                Welcome to my portfolio! <br /> 
                I'm a full-stack developer dedicated to creating innovative, 
                scalable solutions by mastering new technologies and 
                continuously refining my skills.
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start mt-7 space-y-2 sm:space-y-0 sm:space-x-4">
                <Link href="/cv" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto border-2 border-green-500/45 rounded-lg px-6 py-2 hover:shadow-md hover:bg-green-500/45  transition duration-300">Download CV</button>
                </Link>
                <button className="w-full sm:w-auto bg-green-500/25 rounded-lg px-6 py-2 hover:shadow-md hover:bg-green-500/45  transition duration-300">Explore</button>
        
              </div>
            </div>
            <div className="md:flex-shrink-0">
              <Image
                src="/AFRICAN3-removebg-preview.png"
                alt="Gloire Nissi OYERE"
                width={300}
                height={300}
                priority
                className='shadow-lg shadow-green-500/55 rounded-full border-4 border-green-500/25 hover:border-none hover:shadow-none transition duration-500 ease-out transform hover:-translate-y-1 hover:scale-110 opacity-70 hover:opacity-100'
              />
            </div>
          </div>
        </div>
      </section>

      <h1 className="text-2xl font-bold mb-4 text-center mt-10">My Skills</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 mt-10 mb-20">
        {[
          { src: "/Connected world-cuate.png", title: "BackEnd" },
          { src: "/Data points-cuate.png", title: "FrontEnd" },
          { src: "/Online world-amico.png", title: "Database" },
          { src: "/Cloud hosting-amico.png", title: "Project Management" }
        ].map((skill, index) => (
          <div key={index} className="bg-blue-500/45 rounded-md p-5 shadow-md shadow-green-500/95 flex flex-col items-center">
            <Image
              src={skill.src}
              alt={`${skill.title} icon`}
              width={150}
              height={150}
              priority
            />
            <h3 className="mt-2 text-center">{skill.title}</h3>
          </div>
        ))}
      </div>

      <section className="flex flex-col md:flex-row justify-around gap-8 mb-8 px-4">
        <div className="mt-10 md:mt-20 flex justify-center">
          <Image
            src="/african-preview.png"
            alt="About me image"
            width={250}
            height={250}
            priority
            className='shadow-sm shadow-green-500/55 rounded-lg '
          />
        </div>
        <div className="max-w-2xl">
          <h1 className="text-2xl mb-6 text-center md:text-left">About me</h1>
          <p className="text-justify">
            As a dedicated full-stack developer, I combine technical expertise with a
            constant passion for learning and sharing knowledge.
            My journey in front-end and back-end development enables me
            to design and implement comprehensive solutions,
            from user interfaces to database management.
          </p>
          <div className="mt-6">
            <h2 className="text-xl font-thin mb-4">Technical Skills</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Front-End : React, Next.js, Tailwind CSS, Typescript, Storybook, HTML5, CSS3, Bootstrap</li>
              <li>Back-End : Django, Django REST Framework, Flask, Node.js, Express</li>
              <li>Databases : Oracle, MySQL, Sqlite</li>
              <li>Containerization Tools : Docker, Docker Compose</li>
              <li>Version Control : Git, GitHub</li>
              <li>Other Skills : Cloud Computing (AWS), Kubernetes, Trello (project management), ...</li>
            </ul>
          </div>
        </div>
      </section>

      <main className="flex flex-col items-center justify-between p-4 sm:p-10">
        <h1 className="text-2xl font-bold mb-4">My Projects</h1>
        <p className="mb-10 text-center">
          Explore a selection of my key projects showcasing my skills in full-stack development, 
          innovative problem-solving, and user-centered design. Each project represents a unique 
          challenge and demonstrates my ability to deliver robust, scalable solutions.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "LingaFoot", src: "/home5fe.jpg" },
            { title: "Visit Congo", src: "/Tourisme.png" },
            { title: "Todo List", src: "/todo.jpeg" },
            { title: "Finexo", src: "/Finexo.jpeg" },
            { title: "Immobigrand", src: "/Immo.jpeg" },
            { title: "Connect", src: "/dashboard___31_4x.png" }
          ].map((project, index) => (
            <div key={index} className="card bg-blue-500/45 rounded-lg p-5 shadow-lg shadow-blue-500">
              <h1 className="mb-4 text-center">{project.title}</h1>
              <Link href="https://lingafoot.com">
                <Image
                  src={project.src}
                  alt={`${project.title} preview`}
                  width={310}
                  height={200}
                  priority
                  className="w-full h-auto"
                />
              </Link>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}