"use client";
import React from 'react';
import Link from 'next/link';
import { GiSpellBook } from 'react-icons/gi';
import { useSession, signOut } from '@/app/lib/auth-client';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const Navbar = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut();
    toast.success("Logged out successfully!");
    router.push("/");
  };

  return (
    <div className="navbar bg-base-100 py-2 min-h-0 px-20 shadow-lg mt-2">
      
      {/* Logo */}
      <div className="navbar-start">
        <Link href="/">
          <h2 className='flex gap-2 font-bold text-4xl'>
            <GiSpellBook className='text-blue-800 text-4xl' /> Online
            <span className='text-4xl font-bold text-blue-700'>Book</span>
          </h2>
        </Link>
      </div>

      {/* Nav Links */}
      <div className="navbar-center hidden md:flex items-center gap-5 font-medium text-gray-700">
        <Link href="/" className="hover:text-blue-700 transition">Home</Link>
        <Link href="/all-books" className="whitespace-nowrap hover:text-blue-700 transition">All Books</Link>
        {session && (
          <Link href="/my-profile" className="whitespace-nowrap hover:text-blue-700 transition">My Profile</Link>
        )}
      </div>

      {/* Right */}
      <div className="navbar-end gap-3">
        {session ? (
          <div className="hidden md:flex items-center gap-3">
            <span className="text-sm font-semibold text-gray-600">
               {session.user.name}
            </span>
            <button
              onClick={handleLogout}
              className="btn btn-error btn-sm text-white"
            >
              Logout
            </button>
          </div>
        ) : (
       <div className="hidden md:flex items-center gap-2">
      <Link href="/login" className="btn btn-primary btn-sm">
      Login
    </Link>
    <Link href="/register" className="btn btn-outline btn-primary btn-sm">
      Register
    </Link>
     </div>
)}
        {/* Mobile Hamburger */}
        <div className="dropdown dropdown-end md:hidden">
          <div tabIndex={0} role="button" className="mr-6 btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/all-books">All Books</Link></li>
            {session ? (
              <>
                <li><Link href="/my-profile">My Profile</Link></li>
                <li>
                  <button onClick={handleLogout} className="text-red-500">
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li><Link href="/login">Login</Link></li>
            )}
          </ul>
        </div>
      </div>

    </div>
  );
};

export default Navbar;