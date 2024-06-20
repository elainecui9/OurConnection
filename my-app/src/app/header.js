"use client"
import Link from "next/link";



const navigation = [
    { name: 'Home', href: './' },
    { name: 'About', href: './about' },
    { name: 'Pen Pal Letters', href: './letters' },
    { name: 'Women Stories', href: './stories' },
    { name: 'Submit Story', href: './submit' },
];

function Header() {
  return (
    <div id="header" className="relative bg-brown fadeIn font-bold">
      <nav className="justify-center flex items-right p-4 lg:px-8" aria-label="Global">
        <div className="lg:flex lg:gap-x-24">
          {navigation.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className="block text-md leading-6 text-beige transition duration-300 group"
            >
              {item.name}
              <span className="block h-0.5 bg-beige transition-all duration-500 group-hover:max-w-full max-w-0"></span>
            </Link>
          ))}
        </div>
      </nav>
    </div>    
  );
}

export default Header;