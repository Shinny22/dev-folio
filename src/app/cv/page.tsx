import React from 'react'
import Nav from '../component/nav'
import Footer from '../component/footer'
import { FaDownload } from 'react-icons/fa'

const Cv = () => {
    return (
        <>
            <Nav />
            <section className="flex flex-col min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-100">
                <div className="container mx-auto px-4 py-12">
                    <h1 className="text-4xl sm:text-5xl font-bold text-center text-blue-800 mb-10">
                        My CV
                    </h1>

                    <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-lg border border-gray-200 shadow-2xl rounded-2xl overflow-hidden transition duration-300">
                        <div className="relative" style={{ paddingTop: '141.4%' }}>
                            <iframe
                                src="/CV_Nissi_OYERE.pdf#toolbar=0&navpanes=0&scrollbar=0"
                                className="absolute top-0 left-0 w-full h-full"
                                style={{ minHeight: '600px' }}
                            >
                                Your browser does not support PDFs. 
                                <a href="/CV_Nissi_OYERE.pdf" className="text-blue-600 underline">Download it here</a>.
                            </iframe>
                        </div>
                    </div>

                    <div className="text-center mt-10">
                        <a
                            href="/CV_Nissi_OYERE.pdf"
                            download
                            className="inline-flex items-center gap-3 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
                        >
                            <FaDownload className="text-lg animate-bounce" />
                            Download my CV
                        </a>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Cv
