"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { AppProvider } from "@/components/AppContext";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       
      
      <body>
    

        <main className="max-w-4xl mx-auto p-4 ">
          <AppProvider>
            <Toaster />
            <Header />
            
            {children}
            <Footer />
          </AppProvider>
        </main>
      </body>
    </html>
  );
}
