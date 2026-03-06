"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full h-14 border-b flex items-center justify-between px-6">
      <h1 className="font-bold text-lg">ObserveFlow</h1>

      <div className="flex gap-6">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/services">Services</Link>
        <Link href="/logs">Logs</Link>
        <Link href="/alerts">Alerts</Link>
      </div>
    </nav>
  );
}