"use client";

const categories = ["All", "Story", "Tech", "Science"];

export default function CategorySidebar({ selected, onSelect }) {
  return (
    <aside className="w-full md:w-56 shrink-0">
      <div className="bg-white rounded-2xl shadow-md p-5 border border-gray-100">
        <h2 className="font-bold text-gray-700 text-sm uppercase tracking-wider mb-4">
          Filter by Category
        </h2>
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li key={cat}>
              <button
                onClick={() => onSelect(cat)}
                className={`w-full text-left px-4 py-2 rounded-xl text-sm font-medium transition ${
                  selected === cat
                    ? "bg-blue-600 text-white"
                    : "text-black hover:bg-blue-50 hover:text-black"
                }`}
              >
                {cat === "All" ? " All Books"
                  : cat === "Story" ? " Story"
                  : cat === "Tech" ? " Tech"
                  : " Science"}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}