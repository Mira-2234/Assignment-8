import Banner from "@/components/Banner";
import MarqueeBar from "@/components/MarqueeBar";
import BookCard from "@/components/BookCard";
import About from "@/components/About"; 
import books from "@/data/books";
import Link from "next/link";
import { FaBolt, FaShieldAlt, FaMobileAlt, FaInfinity } from "react-icons/fa";

export default function HomePage() {
  const featured = books.slice(0, 4);

  return (
    <div>
      <Banner />
      {/* <MarqueeBar /> */}

      <div className="max-w-7xl mx-auto px-20 py-10 space-y-16">

        {/* Featured Books */}
        <section>
          <div className="mb-8 text-center">
            <h2 className="text-5xl font-bold">Featured Books</h2>
            <p className="text-gray-700 text-lg mt-1">Hand-picked titles just for you</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
            {/* About Section */}
            <About /> 
        </section>

        {/* Why online book*/}
        <section className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-3xl p-10 my-30">
          <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">Why Online Book?</h2>
          <p className="text-center text-gray-500 mb-10">Everything you need in a modern digital library</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <FaBolt className="text-yellow-500 text-4xl mx-auto" />, title: "Instant Access", desc: "Borrow any book instantly without waiting" },
              { icon: <FaShieldAlt className="text-blue-500 text-4xl mx-auto" />, title: "Secure Platform", desc: "Your data is always safe with BetterAuth" },
              { icon: <FaMobileAlt className="text-green-500 text-4xl mx-auto" />, title: "Mobile Friendly", desc: "Read on any device, anywhere, anytime" },
              { icon: <FaInfinity className="text-purple-500 text-4xl mx-auto" />, title: "Huge Collection", desc: "Thousands of titles across all categories" },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow border border-gray-100 text-center hover:shadow-md transition">
                <div className="mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-800 mb-1">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>


      </div>
    </div>
  );
}