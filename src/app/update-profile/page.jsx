"use client";
import { useState } from "react";
import { useSession, updateUser } from "@/app/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function UpdateProfilePage() {
  const { data: session, isPending } = useSession();
  const router = useRouter();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  if (isPending) return <div className="min-h-screen flex items-center justify-center"><div className="animate-spin text-4xl">⏳</div></div>;
  if (!session) { router.push("/login"); return null; }

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    const updateData = {};
    if (name.trim()) updateData.name = name.trim();
    if (image.trim()) updateData.image = image.trim();
    const { error } = await updateUser(updateData);
    setLoading(false);
    if (error) {
      toast.error(error.message || "Update failed");
    } else {
      toast.success("Profile updated! 🎉");
      router.push("/my-profile");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="text-5xl mb-3">✏️</div>
          <h1 className="text-3xl font-bold text-gray-800">Update Profile</h1>
          <p className="text-gray-500 mt-1">Update your name or profile picture</p>
        </div>
        <form onSubmit={handleUpdate} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">New Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}
              placeholder={session.user.name || "Enter new name"}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">New Photo URL</label>
            <input type="url" value={image} onChange={(e) => setImage(e.target.value)}
              placeholder="https://example.com/photo.jpg"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>
          <button type="submit"
            disabled={loading || (!name.trim() && !image.trim())}
            className="w-full bg-emerald-600 text-white py-3 rounded-xl font-semibold text-lg hover:bg-emerald-700 transition disabled:opacity-50"
          >
            {loading ? "Updating..." : "Update Information"}
          </button>
          <button type="button" onClick={() => router.back()}
            className="w-full border border-gray-200 py-3 rounded-xl font-medium text-gray-600 hover:bg-gray-50 transition"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}