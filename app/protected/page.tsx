// filepath: app/protected/page.tsx
"use client";

import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/auth");
    }
  }, [user, loading, router]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return null; // Or a message like "Redirecting..."
  }

  return (
    <div>
      <h1>Protected Page</h1>
      <p>Welcome, {user}!</p>
    </div>
  );
}
