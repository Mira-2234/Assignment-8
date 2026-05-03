"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import BookCard from "@/components/BookCard";
import CategorySidebar from "@/components/CategorySidebar";
import books from "@/data/books";

function AllBooksContent() {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) setCategory(cat);
  }, [searchParams]);

  const filtered = books.filter((book) => {
    const matchSearch = book.title.toLowerCase().includes(search.toLowerCase());
    const matchCat = category === "All" || book.category === category;
    return matchSearch && matchCat;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-8 text-center">
        <h1 className="text-5xl font-bold text-black mb-2"> All Books</h1>
        <p className="text-gray-500">Browse and borrow from our complete collection</p>
      </div>
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search books by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-gray-200 rounded-2xl px-6 py-4 text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <CategorySidebar selected={category} onSelect={setCategory} />
        <div className="flex-1">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-500">
              <div className="text-6xl mb-4">📭</div>
              <p className="text-xl font-medium">No books found</p>
              <p className="text-sm mt-2">Try a different search or category</p>
            </div>
          ) : (
            <>
              <p className="text-sm text-gray-500 mb-4">{filtered.length} book(s) found</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((book) => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default function AllBooksPage() {
  return (
    <Suspense fallback={
      <div className="flex justify-center py-20">
        <div className="text-4xl animate-spin">⏳</div>
      </div>
    }>
      <AllBooksContent />
    </Suspense>
  );
}