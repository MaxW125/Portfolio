import React from "react";

export default function Footer() {
  return (
    <footer className="py-8 px-6 bg-black border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/20 text-sm">
          © {new Date().getFullYear()} Max Westmoreland. All rights reserved.
        </p>
      </div>
    </footer>
  );
}