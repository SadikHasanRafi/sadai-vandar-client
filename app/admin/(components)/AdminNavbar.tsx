import { Bell, Search } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function AdminNavbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">



<div className="flex-1 flex justify-start ">
  <div className="relative w-full max-w-sm ml-8">
    
    {/* Icon */}
    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral/50 w-5 h-5" />

    {/* Input */}
    <input
      type="text"
      placeholder="Search products, vendors..."
      className="
        w-full
        h-12
        pl-12 pr-4
        rounded-xl
        bg-base-200
        border border-base-300
        focus:outline-none
        focus:border-primary
        focus:ring-2 focus:ring-primary/20
        transition-all duration-200
        text-sm
        placeholder:text-neutral/50
      "
    />
  </div>
</div>




<div className="flex items-center gap-3">

  {/* 🔔 Bell with notification */}
  <button className="relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-base-200 transition">
    <Bell size={20} />

    {/* Notification dot */}
    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
  </button>

  {/* Divider (cleaner + subtle) */}
  <div className="h-6 w-px bg-base-300"></div>







  {/* 👤 Avatar Dropdown */}
  <div className="dropdown dropdown-end">

  {/* Trigger (TEXT + AVATAR together) */}
  <div
    tabIndex={0}
    role="button"
    className="flex items-center gap-3 cursor-pointer px-2 py-1 rounded-lg hover:bg-base-200 transition"
  >
    {/* Text (left side) */}
    <div className="text-right leading-tight">
      <p className="font-semibold text-sm">
        Super Admin
      </p>
      <p className="text-xs text-base-content/60">
        super.admin@example.com
      </p>
    </div>

    {/* Avatar (right side) */}
    <div className="relative w-10 h-10 rounded-full overflow-hidden ring ring-base-300 ring-offset-base-100 ring-offset-2">
      <Image
        fill
        alt="User Avatar"
        src="/avatar-placeholder.png"
      />
    </div>
  </div>

  {/* Dropdown Panel */}
  <ul
    tabIndex={-1}
    className="menu menu-sm dropdown-content bg-base-100 rounded-xl z-10 mt-3 w-56 p-2 shadow-lg border border-base-200"
  >
    <li>
      <a className="justify-between">
        Profile
        <span className="badge badge-secondary badge-sm">New</span>
      </a>
    </li>
    <li><a>Settings</a></li>
    <li><a className="text-error">Logout</a></li>
  </ul>

  </div>





















</div>

    </div>


  )
}
