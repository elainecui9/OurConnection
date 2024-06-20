import Image from "next/image";
import Footer from "./footer";
import FrontPage from "./Assets/FrontPage.jpg";
import Link from "next/link";
import PenPal from "./Assets/PenPals.png";
import Stories from "./Assets/Stories.png";
import PPImage from "./Assets/PPImage.png";
import Header from "./header";

export default function Home() {
  return (
    <main className="min-h-screen bg-beige flex flex-col">
      <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap" rel="stylesheet"/>
      <Header></Header>
      <div className="flex flex-row h-screen">
        <div className="bg-center bg-cover">
          <Image src={FrontPage}>
          </Image>
        </div>
        <div className="flex-row pt-24 px-24 text-brown ">
          <h1 className="text-6xl font-bold">Share Your Stories Today</h1>
          <h1 className="text-xl mt-8 mb-32">Read the stories of current and past incarcerated women</h1>
          <div className="transition-transform transform hover:-translate-y-1">
            <Link href="./about" className=" bg-brown font-bold text-beige rounded-md px-8 py-4 ">Learn More</Link>
          </div>
        </div> 
      </div> 
      <div className="h-screen text-brown text-center my-32">
        <h1 className="text-6xl font-bold">Read Our Stories</h1>
        <h1 className="text-xl mt-8 mb-32">Read the stories from incarcerated women.</h1>
        <div className="flex text-beige flex-wrap gap-32 justify-center ">
          <Link href ="./letters" className="text-beige content-center transition-transform transform hover:-translate-y-2 hover:shadow-lg">
            <Image src={PenPal} width={300} height={300}></Image>
            <h1 className="bg-brown py-8 font-bold text-lg">Pen Pal Letters</h1>
          </Link>
          <Link href ="./stories" className="text-beige content-center transition-transform transform hover:-translate-y-2 hover:shadow-lg">
            <Image src={Stories} width={300} height={300}></Image>
            <h1 className="bg-brown py-8 font-bold text-lg">Women's Stories</h1>
          </Link>
        </div>
      </div>  
      <div className="flex flex-row h-screen ">
        <div className="flex-row pt-24 px-24 text-brown">
          <h1 className="text-6xl font-bold">Join Our Pen Pal Program</h1>
          <h1 className="text-xl mt-32 mb-8 ">With just a quick form, find the right person for you to share your experiences with. </h1>
          <h1 className="text-xl mt-8 mb-16">You will be contacted once you join the program with your very own pen pal. </h1>
        <div className="transition-transform transform hover:-translate-y-2">
          <Link href="https://forms.gle/H21wUaAeBkUQnfoh9" target="_blank" rel="noopener noreferrer" className=" bg-brown font-bold text-beige rounded-md px-8 py-4">Pen Pal Program Form</Link>
        </div>
        </div> 
        <div className="bg-center bg-cover">
          <Image src={PPImage}>
          </Image>
        </div>
      </div> 
      <div className="text-brown mt-64 text-center">
        <h1 className="text-6xl font-bold">Want to Write a Story?</h1>
        <h1 className="text-xl mt-8 mb-32">We would love to hear about your experiences.</h1>
        <div className="transition-transform transform hover:-translate-y-2">
          <Link href="./submit" className=" bg-brown font-bold text-beige rounded-md px-64 py-4">Submit a Story Today</Link>
        </div>
        <h1 className="text-xl mt-32 mb-32">Or, email us at ourconnections@gmail.com</h1>
        </div>
      <Footer></Footer>
    </main>
  );
}
