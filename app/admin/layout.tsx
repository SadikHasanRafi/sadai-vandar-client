"use client";
import {
  BarChart3,
  CreditCard,
  Grid,
  LayoutDashboard,
  Package,
  Settings,
  ShoppingCart,
  Store,
  Users,
} from "lucide-react";
import Image from 'next/image';
import Link from "next/link";
import { usePathname } from "next/navigation";
import AdminSidebarHeaders from "./(components)/AdminSidebarHeaders";
import React from "react";
import AdminNavbar from "./(components)/AdminNavbar";
import AdminFooter from "./(components)/AdminFooter";

export default function AdminDashboard({ children }: { children: React.ReactNode }) {


  const pathname = usePathname();

const menuItems = [
  { name: "Dashboard", path: "/admin/admin-dashboard", icon: LayoutDashboard },
  { name: "Vendor", path: "/admin/admin-vendor", icon: Store },
  { name: "Customers", path: "/admin/admin-customers", icon: Users },
  { name: "Products", path: "/admin/admin-products", icon: Package },
  { name: "Orders", path: "/admin/admin-orders", icon: ShoppingCart },
  { name: "Categories", path: "/admin/admin-categories", icon: Grid },
  { name: "Analytics", path: "/admin/admin-analytics", icon: BarChart3 },
  { name: "Payment", path: "/admin/admin-payment", icon: CreditCard },
  { name: "Settings", path: "/admin/admin-settings", icon: Settings },
];




  return (
    <>
    
    
    
    
    

<div className="drawer drawer-open">
  
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  
  
  
    <div className="drawer-content flex flex-col min-h-screen">
    
    
    {/* Navbar */}
    <AdminNavbar></AdminNavbar>




    {/* Page content here */}
    <div className="flex-1  p-4">{children}</div>

    </div>

  <div className="drawer-side drawer-open">
    <label htmlFor="my-drawer-4" aria-label="open sidebar" className="drawer-overlay"></label>
    <div className="flex min-h-full flex-col items-start bg-base-200  w-64">
      
      


<AdminSidebarHeaders></AdminSidebarHeaders>



      {/* Sidebar content here */}
<ul className="menu w-full grow bg-accent-light px-2">
  {menuItems.map((item) => {
    const isActive = pathname.startsWith(item.path);
    const Icon = item.icon;

    return (
      <li key={item.name} className="mb-1">
        <Link
          href={item.path}
          className={`
            group flex items-center gap-3 w-full
            px-4 py-2.5
            rounded-box
            transition-all duration-50
            font-semibold text-[15px]

            hover:pl-5
            hover:bg-neutral-light
            hover:border-r-4 hover:border-primary
            hover:rounded-r-md

            ${
              isActive
                ? "bg-neutral-light border-r-4 border-primary rounded-r-md"
                : ""
              }
          `}
        >
          {/* Icon */}
          <Icon
            className={`
              size-4.5
              transition-all duration-200
              
              ${isActive ? "text-primary scale-105" : "text-neutral"}
              group-hover:text-primary group-hover:scale-105
            `}
          />

          {/* Text */}
          <span
            className={`
              transition-all duration-200

              ${isActive ? "text-primary" : "text-neutral"}
              group-hover:text-primary
            `}
          >
            {item.name}
          </span>
        </Link>
      </li>
    );
  })}
</ul>



    </div>
  </div>



</div>  

    <AdminFooter></AdminFooter>

              </>



)
}
