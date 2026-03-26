import AdminDashboard from "./page";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AdminDashboard>{children}</AdminDashboard>;
}