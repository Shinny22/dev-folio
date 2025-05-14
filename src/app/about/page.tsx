import Image from 'next/image';
import Footer from '../component/footer';
import Nav from '../component/nav';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-100 via-white to-green-100 text-gray-800">
      <Nav />
      <main className="flex-grow px-4 sm:px-6 lg:px-20 py-10 animate-fade-in">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-blue-800 tracking-wide">
          About Me
        </h1>

        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          
          {/* Texte */}
          <div className="w-full md:w-1/2 bg-white/80 backdrop-blur-md p-6 sm:p-10 rounded-2xl shadow-xl border border-blue-200 hover:shadow-2xl transition duration-300 space-y-6">
            <p className="text-base sm:text-lg leading-relaxed">
              I am a passionate and skilled full-stack developer with deep expertise in both frontend and backend development, complemented by strong competencies in project management, design, relational databases, and data analysis.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              My degree in software engineering from CFI CIRAS has provided me with a solid technical foundation, enabling me to design and implement comprehensive and efficient solutions, from intuitive user interfaces to sophisticated backend systems and insightful data-driven analytics.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              I am currently strengthening my skills in data science through Akiani Academy, focusing on Python, machine learning, and applied AI.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              I’m actively working on two innovative projects: <strong>CFI Digital</strong>, which promotes digital rights and tech empowerment in Congo, and <strong>NutriGood</strong>, a smart nutrition app that uses AI to improve health outcomes through personalized food recommendations.
            </p>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="group relative">
              <Image
                src="/african2-removebg-preview.png"
                alt="Nissi Oyere"
                width={300}
                height={300}
                className="rounded-full shadow-xl border-4 border-green-400 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-green-500 text-white px-4 py-1 text-xs rounded-full shadow-md">
                Full Stack Engineer
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
