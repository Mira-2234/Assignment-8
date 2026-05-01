"use client";
import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import books from "@/data/books";
import Image from "next/image";
import toast from "react-hot-toast";

export default function BookDetailsPage({ params }) {
  const { data: session, isPending } = useSession();
  const router = useRouter();
  const book = books.find((b) => b.id === params.id);

  useEffect(() => {
    if (!isPending && !session) {
      toast.error("Please login to view book details");
      router.push("/login");
    }
  }, [session, isPending, router]);

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin text-4xl">⏳</div>
      </div>
    );
  }

  if (!session) return null;

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">📭</div>
          <h2 className="text-2xl font-bold text-gray-700">Book not found</h2>
        </div>
      </div>
    );
  }

  const handleBorrow = () => {
    if (book.available_quantity === 0) {
      toast.error("Sorry, this book is currently unavailable.");
      return;
    }
    toast.success(`🎉 "${book.title}" has been borrowed successfully!`);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="relative w-full md:w-72 h-80 md:h-auto shrink-0 bg-gray-100">
            <Image
              src={book.image_url}
              alt={book.title}
              fill
              className="object-cover"
              sizes="300px"
            />
          </div>
          <div className="p-8 flex-1">
            <span className="inline-block bg-emerald-100 text-emerald-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
              {book.category}
            </span>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{book.title}</h1>
            <p className="text-gray-500 text-lg mb-4">
              by <span className="font-medium text-gray-700">{book.author}</span>
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">{book.description}</p>
            <div className="flex items-center gap-3 mb-8">
              <div className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium ${
                book.available_quantity > 0
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}>
                {book.available_quantity > 0
                  ? `✅ ${book.available_quantity} copies available`
                  : "❌ Currently unavailable"}
              </div>
            </div>
            <button
              onClick={handleBorrow}
              disabled={book.available_quantity === 0}
              className="bg-emerald-600 text-white px-8 py-3 rounded-xl font-semibold text-lg hover:bg-emerald-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {book.available_quantity > 0 ? "📚 Borrow This Book" : "Out of Stock"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}