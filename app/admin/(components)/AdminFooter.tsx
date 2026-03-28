import React from 'react'

export default function AdminFooter() {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-accent-light text-base-content p-4">
      <aside>
        <p>Copyright © {new Date().getFullYear()} - All rights reserved by ACME Industries Ltd</p>
      </aside>
    </footer>
  )
}