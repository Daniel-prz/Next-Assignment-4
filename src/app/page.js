"use client";
import React from "react";
import Image from "next/image";
import Navigation from "./components/navigation";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Home</h1>
        <Navigation />
      </div>
    </main>
  );
}
