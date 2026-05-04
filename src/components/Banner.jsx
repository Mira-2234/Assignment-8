import { Button } from "@heroui/react";
import Link from "next/link";
import MarqueeBar from "@/components/MarqueeBar";
const Banner = () => {
  return (
    <div className="bg-[url('https://www.shutterstock.com/image-photo/book-open-pages-close-up-600nw-2562942291.jpg')] h-[80vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl mb-10">
      {/* Overlay */}
      <div className="w-full h-full rounded-lg bg-black/50 flex items-center justify-center ">
        <div className=" max-w-7xl mx-60 px-6 text-white">
          <p className="text-white uppercase font-semibold text-[13px] mb-3 text-center">
            Online Book Borrowing Platform
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Find Your <span className="text-blue-700">Next Read</span>
          </h1>

          <p className="py-6 text-center ml-20 text-sm text-white max-w-xl">
            Discover thousands of books across Story, Tech, and Science.
            Borrow books online easily, manage your reading journey, and
            experience a modern digital library.
          </p>

          <div className="flex gap-4 mb-10 mx-60">
            <Link href="/all-books">
              <Button className="btn btn-primary">
               Browse Now
              </Button>
            </Link>
            <Link href="/pricing">
              <Button variant="outline" className="btn bg-gray-200 hover:bg-gray-300">
                Explore 
              </Button>
            </Link>

          </div>
          <MarqueeBar className=""/>
        </div>
      </div>
    </div>
  );
};
export default Banner;