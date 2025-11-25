"use client";

import Link from "next/link";
import { Logo } from "../header/Logo";

export const Footer = () => {
  return (
    <footer className="w-full bg-neutral-950 text-gray-400 py-8 mt-40">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-4">
        {/* Brand */}
        <Logo />

        {/* Links */}
        <nav className="flex gap-6 text-sm">
          <Link href="#" className="hover:text-gray-200 transition-colors">
            Inicio
          </Link>
          <Link href="#" className="hover:text-gray-200 transition-colors">
            Menú
          </Link>
          <Link href="#" className="hover:text-gray-200 transition-colors">
            Ubicación
          </Link>
          <Link href="#" className="hover:text-gray-200 transition-colors">
            Contacto
          </Link>
        </nav>

        {/* Bottom text */}
        <p className="text-xs text-gray-500 mt-2">
          {`© ${new Date().getFullYear()} PizzaHub. All rights reserved.`}
        </p>
      </div>
    </footer>
  );
};
