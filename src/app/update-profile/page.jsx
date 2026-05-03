"use client";
import { useSession, authClient } from "@/app/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

export default function UpdateProfilePage() {
  const { data: session, isPending } = useSession();
  const router = useRouter();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isPending && !session) {
      router.push("/login");
    }
    if (session) {
      setName(session.user.name || "");
      setImage(session.user.image || "");
    }
  }, [session, isPending, router]);

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-blue-700"></span>
      </div>
    );
  }

  if (!session) return null;

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await authClient.updateUser({
      name: name || undefined,
      image: image || undefined,
    });

    setLoading(false);

    if (error) {
      toast.error(error.message || "Update failed");
    } else {
      toast.success("Profile updated successfully! 🎉");
      router.push("/my-profile");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Update Profile</h1>
          <p className="text-gray-500 mt-1">Change your name or photo</p>
        </div>

        <form onSubmit={handleUpdate} className="space-y-5">

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              New Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter new name"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              New Photo URL
            </label>
            <input
              type="url"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="https://example.com/photo.jpg"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-700 text-white py-3 rounded-xl font-semibold hover:bg-blue-800 transition disabled:opacity-60"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="loading loading-spinner loading-sm"></span>
                Updating...
              </span>
            ) : (
              "Update Information"
            )}
          </button>

          <button
            type="button"
            onClick={() => router.back()}
            className="w-full border border-gray-200 py-3 rounded-xl font-medium text-gray-600 hover:bg-gray-50 transition"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}