"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminDashboardRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.push("/admin/admin-dashboard"); // <-- change this to wherever you want
  }, [router]);

  return (
    <div>
      Redirecting... 🚀
    </div>
  );
}