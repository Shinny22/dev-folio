import Image from 'next/image';
import Nav from '../component/nav';
import Footer from '../component/footer';

export default function Contact() {
    return (
        <div>
            <Nav/>
            <h1 className="flex text-4xl font-bold justify-center mt-10 ">Contact me</h1>

            <div className="flex flex-row items-center justify-around m-10">
                <Image
                    src="/african-f-removebg-preview.png"
                    alt="Nissi Oyere"
                    width={350}
                    height={100}
                />

                <div className="block items-center justify-center m-5">
                    <form className='flex flex-col gap-5 items-center justify-center bg-blue-500/25 border-2 border-blue-700 p-10 rounded-lg'>
                        <h2 className='text-2xl font-bold text-center text-blue-700 '>Contact Me</h2>
                        <input type="text" placeholder="Name" className='w-full border-2 border-gray-300 rounded-md p-2' />
                        <input type="email" placeholder="Email" className='w-full border-2 border-gray-300 rounded-md p-2' />
                        <textarea name="message" id="message" cols={30} rows={3} placeholder="Message" className='w-full border-2 border-gray-300 rounded-md p-2'></textarea>
                        <div className='flex flex-row gap-3'>
                            <button type="submit" className='bg-blue-800 text-white p-2 rounded-md'>Submit</button>
                            <button type="reset" className=' border-2 border-red-500 text-red-500 p-2 rounded-md'>Annuler</button>
                        </div>
                    </form>

                </div>
            </div>
            <Footer/>
        </div>
    )
}