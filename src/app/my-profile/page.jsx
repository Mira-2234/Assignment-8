"use client";
import { useSession, signOut } from "@/app/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";

export default function MyProfilePage() {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isPending && !session) {
      toast.error("Please login first");
      router.push("/login");
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

  const user = session.user;

  const handleLogout = async () => {
    await signOut();
    toast.success("Logged out successfully!");
    router.push("/");
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">My Profile</h1>

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
        {/* Banner */}
        <div className="h-28 " />

        <div className="px-8 pb-8">
          {/* Avatar */}
          <div className="relative -mt-14 mb-4">
            <div className="w-28 h-28 rounded-full border-4 border-white shadow-lg overflow-hidden bg-blue-100 relative">
              {user.image ? (
                <Image
                  src={user.image}
                  alt={user.name}
                  fill
                  className="object-cover"
                  sizes="112px"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-5xl font-bold text-blue-700">
                  {user.name?.[0]?.toUpperCase() || "?"}
                </div>
              )}
            </div>
          </div>

          {/* Name & Email */}
          <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
          <p className="text-gray-500 mt-1">{user.email}</p>

          {/* Info Cards */}
          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3">
              
              <div>
                <p className="text-xs text-gray-400">Full Name</p>
                <p className="text-sm font-medium text-gray-700">{user.name}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3">
             
              <div>
                <p className="text-xs text-gray-400">Email</p>
                <p className="text-sm font-medium text-gray-700">{user.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3">
             
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/update-profile"
              className="flex-1 text-center bg-blue-700 text-white py-3 rounded-xl font-semibold hover:bg-blue-800 hover:shadow shadow-lg transition"
            >
              Update Profile
            </Link>
            <button
              onClick={handleLogout}
              className="flex-1 border border-red-200 text-red-500 py-3 rounded-xl font-semibold hover:bg-red-50 transition"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}