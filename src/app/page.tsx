import Image from "next/image";
import Link from "next/link";
import Nav from "./component/nav";
import Footer from "./component/footer";

export default function Home() {
  return (
    <>

      <Nav />
      <section className="flex min-h-screen flex-col items-center justify-between p-8 mb-15 mt-18 border-b-2 border-blue-500/25">
        <div className=" w-full max-w-5xl items-center justify-around font-mono text-sm lg:flex gap-8">
          <div className="block ">
            <h1 className="text-4xl font-bold ">Hello,I'm<br></br> <span className="text-green-500/75"> Gloire Nissi OYERE</span></h1>
            <p className="mb-8 ml-1">Full Stack Developer</p>
            <div>

              Welcome to my portfolio! <br /> I’m a full-stack developer dedicated to creating innovative, <br /> scalable solutions by mastering new technologies and <br /> continuously refining my skills.
            </div>
            <div className="flex flex-row items-center  mt-7 ml-10 space-x-2">
              <button className="border-2 border-green-500/45 rounded-lg p-2 hover:shadow-md hover:bg-blue-500/45"><Link rel="stylesheet" href="/cv" /> Download CV</button>
              <button className="bg-green-500/25 rounded-lg p-2  hover:shadow-md hover:shadow-blue-500/75">Explore</button>
            </div>
          </div>
          <div className="block mt-3">
            <Image
              src="/AFRICAN3-removebg-preview.png"
              alt="devfolio Logo"
              width={230}
              height={14}
              priority
              className='shadow-sm shadow-green-500/55 rounded-full border-2 border-green-500/25'
            />
          </div>
        </div>

      </section>
      <h1 className="text-2xl font-bold mb-4 text-center mt-10">My Skills</h1>
      <div className="flex flex-row justify-around gap-4 items-center mt-20 mb-20">
        <div className="bg-blue-500/45 rounded-md p-5 shadow-md shadow-green-500/95">
          <Image
            src="/Connected world-cuate.png"
            alt="devfolio Logo"
            width={150}
            height={14}
            priority
          />
          <h3>BackEnd</h3>
        </div>
        <div className=" bg-blue-500/45 rounded-md p-5 shadow-md shadow-green-500/95">
          <Image
            src="/Data points-cuate.png"
            alt="devfolio Logo"
            width={150}
            height={14}
            priority
          />
          <h3>FontEnd</h3>
        </div>
        <div className="bg-blue-500/45 rounded-md p-5 shadow-md shadow-green-500/95">
          <Image
            src="/Online world-amico.png"
            alt="devfolio Logo"
            width={150}
            height={14}
            priority
          />
          <h3>Database</h3>
        </div>

        <div className="bg-blue-500/45 rounded-md p-5 shadow-md shadow-green-500/95">
          <Image
            src="/Cloud hosting-amico.png"
            alt="devfolio Logo"
            width={150}
            height={14}
            priority
          />
          <h3>Project Management</h3>
        </div>
      </div>

      <section className="flex justify-around gap-3 mb-8 ">
        <div className="block mt-20">
          <Image
            src="/Moi.png"
            alt="devfolio Logo"
            width={350}
            height={14}
            priority
            className='shadow-sm shadow-green-500/55'
          />

        </div>
        <div className="block">
          <h1 className="text-2xl mb-10 text-center">About me</h1>
          <p className="block  text-justify ">
            Développeur full stack déterminé, j'allie expertise technique et une <br></br>
            passion constante pour l'apprentissage et le partage de connaissances.<br></br>
            Mon parcours en développement front-end et back-end me permet <br></br>
            de concevoir et de mettre en œuvre des solutions
            complètes, <br></br>de l'interface utilisateur à la gestion des bases de données.
          </p>
          <div className="flex flex-col justify-between space-x-20">
            <h2 className="block text-justify text-xl font-thin  mt-5 mb-4">
              Compétences Techniques
            </h2>
            <ul className="list-disc text-justify">
              <li>Front-End : React,Next.js,Tailwind CSS,Typescript,Storybook, <br></br>HTML5, CSS3,Bootstrap</li>
              <li>Back-End : Django, Django REST Framework,Flask,Node.js, Express</li>
              <li>Bases de Données : Oracle, MySQL, Sqlite</li>
              <li>Outils de Conteneurisation : Docker, Docker Compose</li>
              <li>Gestion de Version : Git, GitHub</li>
              <li>Autres Compétences : Cloud Computing (AWS), Kubernetes,<br></br>Trello(gestion de projet),..</li>
            </ul>
          </div>
        </div>
      </section>

      <main className="flex  flex-col items-center justify-between p-10">
        <h1 className="text-2xl font-bold mb-4">My Projects</h1>
        <p className=" mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lo</p>
        <div className="flex flex-row items-center justify-between space-x-20 mb-5">
          <div className="card mb-4 bg-blue-500/45 rounded-lg p-5 shadow-lg shadow-blue-500">
            <h1 className=" mb-4">LingaFoot</h1>
            <Link href="https://lingafoot.com">
              <Image
                src="/home5fe.jpg"
                alt="devfolio Logo"
                width={310}
                height={34}
                priority
              />
            </Link>
          </div>
          <div className="card mb-4 bg-blue-500/45 rounded-lg p-5 shadow-lg shadow-blue-500">
            <h1 className=" mb-4">Visit Congo</h1>
            <Link href="https://lingafoot.com">
              <Image
                src="/Tourisme.png"
                alt="devfolio Logo"
                width={310}
                height={24}
                priority
              />
            </Link>
          </div>
          <div className="card mb-4 bg-blue-500/45 rounded-lg p-5 shadow-lg shadow-blue-500">
            <h1 className=" mb-4">Todo List</h1>
            <Link href="https://lingafoot.com">
              <Image
                src="/todo.jpeg"
                alt="devfolio Logo"
                width={310}
                height={34}
                priority
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between space-x-20">
          <div className="card mb-4 bg-blue-500/45 rounded-lg p-5 shadow-lg shadow-blue-500">
            <h1 className="mb-4">Finexo</h1>
            <Link href="https://lingafoot.com">
              <Image
                src="/Finexo.jpeg"
                alt="devfolio Logo"
                width={330}
                height={24}
                priority
              />
            </Link>
          </div>
          <div className="card mb-4 bg-blue-500/45 rounded-lg p-5 shadow-lg shadow-blue-500">
            <h1 className=" mb-4">Immobigrand</h1>
            <Link href="https://lingafoot.com">
              <Image
                src="/Immo.jpeg"
                alt="devfolio Logo"
                width={325}
                height={25}
                priority
              />
            </Link>
          </div>
          <div className="card mb-4 bg-blue-500/45 rounded-lg p-5 shadow-lg shadow-blue-500">
            <h1 className=" mb-4">Connect</h1>
            <Link href="https://lingafoot.com">
              <Image
                src="/dashboard___31_4x.png"
                alt="devfolio Logo"
                width={320}
                height={24}
                priority
              />
            </Link>
          </div>
        </div>

      </main>


      <Footer />
    </>
  );
}
