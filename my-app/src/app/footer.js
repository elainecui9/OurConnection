"use client"
import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-brown text-white border-0 relative w-screen">
      <section className="flex flex-row flex-wrap justify-evenly py-12 place-content-center">
        <div className="flex flex-col gap-y-4 justify-center mx-12 mb-8 border-0">
          <div className="text-sm text-white text-center">
            <h1>©OurConnection 2024 </h1>
            <h2 className="text-sm">Developed by Elaine Cui using React, JavaScript, Nextjs, and Tailwind.</h2>
            <h2 className="text-sm">Designed in Figma.</h2>
            </div>
        </div>
        
      </section>
      
    </footer>
  );
};

export default Footer;
