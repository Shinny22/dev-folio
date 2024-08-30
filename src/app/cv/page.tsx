import React from 'react'
import Nav from '../component/nav'
import Footer from '../component/footer'
import { FaDownload } from 'react-icons/fa'

const Cv = () => {
    return (
        <>
            <Nav />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-center mt-10 mb-10">Voir CV</h1>
                <div className="bg-white shadow-xl rounded-lg overflow-hidden max-w-4xl mx-auto">
                    <div className="relative" style={{ paddingTop: '141.4%' }}> {/* Ratio A4 */}
                        <iframe 
                            src="/CV (1) (1).pdf#view=FitH&toolbar=0&navpanes=0&scrollbar=0&statusbar=0&messages=0&print-allow=0" 
                            className="absolute top-0 left-0 w-full h-full"
                            style={{ minHeight: '600px' }}
                        >
                            This browser does not support displaying PDFs.
                        </iframe>
                    </div>
                </div>
                <div className="text-center mt-8">
                    <a 
                        href="/CV (1) (1).pdf" 
                        download 
                        className="inline-flex items-center px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300 ease-in-out"
                    >
                        <FaDownload className="mr-2" />
                        Download the CV
                    </a>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Cv