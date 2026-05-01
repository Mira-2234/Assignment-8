export default function HeroSection() {
  return (
    <main className="hero min-h-[85vh] bg-gradient-to-br from-base-100 to-base-200 px-6 lg:px-12">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse gap-12 max-w-7xl">
        
        {/* Right Image */}
        <img
          src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
          alt="Library"
          className="w-full max-w-md rounded-3xl shadow-2xl object-cover"
        />

        {/* Left Content */}
        <div>
          <p className="text-primary uppercase font-semibold text-[13px] mb-3">
            Online Book Borrowing Platform
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Find Your <br /> <span className="text-blue-700">Next Read</span>
          </h1>

          <p className="py-6 text-sm text-base-content/75 max-w-xl">
            Discover thousands of books across Story, Tech, and Science.
            Borrow books online easily, manage your reading journey, and
            experience a modern digital library.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="btn btn-primary btn-lg rounded-2xl">
              Browse Now
            </button>

            <button className="btn btn-outline btn-lg shadow-sm hover:bg-blue-700 hover:text-white hover:shadow-sm hover:shadow-blue-600 border-none rounded-2xl">
              Explore Categories
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}