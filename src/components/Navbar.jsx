import React from 'react';
import Link from 'next/link';
import { GiSpellBook } from 'react-icons/gi';

const Navbar = () => {
    return (
       <div className="navbar bg-base-100 py-2 min-h-0 px-20 shadow-lg mt-2">
  <div className="navbar-start">
    <h2 className='flex gap-2 font-bold text-4xl'><GiSpellBook className='text-blue-800 text-4xl ' /> Book 
        <span className='text-4xl font-bold text-blue-700'>Nest</span>
    </h2>
  </div>

 <div className="hidden md:flex items-center gap-5 font-medium text-gray-700">
          <Link href="/" className="hover:text-blue-700 transition">Home</Link>
          <Link href="/all-books" className=" whitespace-nowrap hover:text-blue-700 transition">All Books</Link>
        </div>

  <div className="navbar-end gap-5">
    <Link href="/login" className="btn btn-primary ">Login</Link>
    <div className="dropdown">
      <div tabIndex={0} role="button" className=" mr-6 btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content rounded-box z-1 mt-3 shadow text-black">
        
          <ul className="p-2">
            <li><a>Home</a></li>
            <li><a>All Books</a></li>
          </ul>
        
      </ul>
    </div>
  
  </div>
</div>
    );
};

export default Navbar;