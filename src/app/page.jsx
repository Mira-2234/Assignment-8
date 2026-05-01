import Banner from "@/components/Banner";
import MarqueeBar from "@/components/MarqueeBar";
import BookCard from "@/components/BookCard";
import books from "@/data/books";
import Link from "next/link";

export default function HomePage() {
  const featured = books.slice(0, 4);

  return (
    <div>
    
      <div className="max-w-7xl mx-auto px-4 py-10 space-y-16">

        {/* Featured Books */}
        <section>
          <div className="mb-8">
            <div className=" text-center">
              <h2 className="text-5xl font-bold ">Featured Books</h2>
              <p className="text-gray-700 text-lg mt-1">Hand-picked titles just for you</p>
            </div>
          
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </section>

        {/* Browse by Category */}
        <section className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl p-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">Browse by Category</h2>
          <p className="text-center text-gray-500 mb-8">Find the perfect book in your favorite genre</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "📖", label: "Story", desc: "Captivating fiction and narrative masterpieces", color: "bg-rose-100 text-rose-700" },
              { icon: "💻", label: "Tech", desc: "Programming, system design, and software engineering", color: "bg-blue-100 text-blue-700" },
              { icon: "🔬", label: "Science", desc: "Physics, biology, cosmos, and everything in between", color: "bg-purple-100 text-purple-700" },
            ].map((cat) => (
              <Link
                key={cat.label}
                href={`/all-books?category=${cat.label}`}
                className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition text-center group"
              >
                <div className={`text-5xl mb-3 inline-block p-4 rounded-2xl ${cat.color}`}>{cat.icon}</div>
                <h3 className="font-bold text-xl text-gray-800 group-hover:text-emerald-600 transition">{cat.label}</h3>
                <p className="text-gray-500 text-sm mt-2">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Why BookNest */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">Why BookNest?</h2>
          <p className="text-center text-gray-500 mb-10">Everything you need in a modern digital library</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🚀", title: "Instant Access", desc: "Borrow any book instantly without waiting" },
              { icon: "🔒", title: "Secure Platform", desc: "Your data is always safe with BetterAuth" },
              { icon: "📱", title: "Mobile Friendly", desc: "Read on any device, anywhere, anytime" },
              { icon: "♾️", title: "Huge Collection", desc: "Thousands of titles across all categories" },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow border border-gray-100 text-center hover:shadow-md transition">
                <div className="text-4xl mb-3">{item.icon}</div>
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