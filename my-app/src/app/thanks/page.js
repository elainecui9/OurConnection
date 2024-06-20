"use client"
import Image from 'next/image'
import Header from "../header"
import Footer from "../footer"
import Link from "next/link";
import WINDLogo from "../Assets/WINDLogo.webp"


function About() {
    return (
        <section id="contact">
            <Header></Header>
            <div className="min-h-screen relative h-fit w-full bg-beige text-brown flex justify-center items-center flex-col ">
                <div className='flex flex-col'>
                    <h1 className='text-4xl font-bold pt-12 pb-4 text-center'>Thank You for Submitting</h1>
                    <h1 className='text-md font-bold pt-8 pb-4 text-center'>Your story will be approved and posted soon.</h1>
                    <Link href="./" className='mt-8 bg-brown text-white rounded-md p-4 text-center'>Return to Home Page</Link>
                </div>
                
            </div>
            <Footer></Footer>
        </section>
    );
}

export default About;
