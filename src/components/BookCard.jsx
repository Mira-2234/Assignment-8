import Link from "next/link";
import Image from "next/image";

export default function BookCard({ book }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100">
      <div className="relative h-56 bg-gray-100 overflow-hidden">
        <Image
          src={book.image_url}
          alt={book.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 300px"
        />
        <span className="absolute top-3 right-3 bg-blue-400 text-white text-xs px-2 py-1 rounded-full font-medium">
          {book.category}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-gray-800 text-lg leading-tight truncate">{book.title}</h3>
        <p className="text-gray-500 text-sm mt-1">by {book.author}</p>
        <p className="text-gray-600 text-sm mt-2 line-clamp-2">{book.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm  font-medium">
            {book.available_quantity} copies left
          </span>
          <Link
            href={`/books/${book.id}`}
            className="bg-blue-700 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-800 transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}