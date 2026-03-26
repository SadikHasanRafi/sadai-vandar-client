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

export default function AdminDashboard({ children }: { children: React.ReactNode }) {


  const pathname = usePathname();

const menuItems = [
  { name: "Dashboard", path: "/admin", icon: LayoutDashboard },
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
    
<div className="drawer drawer-open">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  
  
  
    <div className="drawer-content">
    
    
    {/* Navbar */}
    <div className="navbar bg-base-100 shadow-sm">

      {/* Sidebar toggle icon */}
      {/* <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
      </label> */}


      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="flex gap-2">
        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <Image fill={true}
                alt="Tailwind CSS Navbar component"
                src="/avatar-placeholder.png" />
            </div>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>





    {/* Page content here */}
    <div className="p-4">{children}</div>
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
              size-[18px]
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



</div>  )
}
