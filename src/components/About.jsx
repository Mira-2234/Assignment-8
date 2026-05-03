"use client";

import Link from "next/link";

export default function About() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-10 bg-white rounded-3xl shadow-lg p-10 border border-gray-100 mt-20">
      
      {/* Image */}
      <div className="flex-1 flex justify-center">
        <img
          src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg"
          alt="BookNest Library"
          className="rounded-2xl shadow-md w-full max-w-sm object-cover"
        />
      </div>

      {/* Right — Content */}
      <div className="flex-1">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          About <span className="text-blue-700">Online Book</span>
        </h2>

        <p className="text-gray-500 leading-relaxed mb-4">
          BookNest is a modern digital library platform designed to make reading
          accessible to everyone. Borrow, explore, and discover books from the
          comfort of your home.
        </p>

        <p className="text-gray-500 leading-relaxed mb-6">
          From classic literature to cutting-edge tech books — we have something
          for every kind of reader. No late fees, no waiting in line, just pure
          reading joy.
        </p>

        {/* Checkpoints */}
        <ul className="space-y-3 mb-8">
          {[
            "1,000+ books across Story, Tech & Science",
            "Secure login with Google OAuth",
            "Borrow instantly — no waiting required",
          ].map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 text-gray-700 font-medium"
            >
              <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0">
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>

        <button className="btn btn-primary px-8">
          Explore Books →
        </button>
      </div>
    </section>
  );
}