import Image from "next/image";
import Link from "next/link";
import { GiSpellBook } from "react-icons/gi";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 ">
      <div className="max-w-7xl mx-auto px-30 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
            <h2 className='flex gap-2 font-bold text-4xl'><GiSpellBook className='text-white text-4xl ' /> Online
                   <span className='text-4xl font-bold text-blue-700'>Book</span>
               </h2>
          <p className="text-sm leading-relaxed">
            Your digital library. Explore, borrow, and enjoy thousands of titles from the comfort of your home.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-blue-700 transition">Home</Link></li>
            <li><Link href="/all-books" className="hover:text-blue-700 transition">All Books</Link></li>
            <li><Link href="/login" className="hover:text-blue-700 transition">Login</Link></li>
            <li><Link href="/register" className="hover:text-blue-700 transition">Register</Link></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact Us</h3>
          <p className="text-sm mb-4">📧 support@booknest.com</p>
          <div className="flex gap-4 text-xl">
            <a  target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">🌐</a>
           
            <a  target="_blank" rel="noreferrer" className="hover:text-white transition">📖</a>
            <a target="_blank" rel="noreferrer" className="hover:text-blue-300 transition">💼</a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center text-xs py-4 text-gray-500">
        © {new Date().getFullYear()} BookNest. All rights reserved.
      </div>
    </footer>
  );
}
