import React from 'react'
import Nav from '../component/nav'
import Footer from '../component/footer'

const Cv = () => {                  
    return (

        <>
        <Nav/>
        <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold mt-10 mb-10">Voir CV</h1>
            <iframe 
                src="/CV (1) (1).pdf#toolbar=0&navpanes=0&scrollbar=0" 
                width="85%" 
                height="500px" 
                className="mb-5"
            >
                Ce navigateur ne supporte pas l'affichage des PDFs.
            </iframe>
            <a href="/CV (1) (1).pdf" download className="mb-10">
                <button className="border-2 border-green-500/45 rounded-lg p-2 hover:shadow-md hover:bg-blue-500/45">
                    Télécharger le CV
                </button>
            </a>
        </div>
        <Footer/>

        </>
    )
}

export default Cv