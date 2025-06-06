"use client";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="nav">
      <ul className="list">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/form">Class</Link></li>

      </ul>
    </nav>
  );
}

