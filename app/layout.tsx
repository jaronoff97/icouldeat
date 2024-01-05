import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ehicouldeat",
  description: "my fun food blog ;)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex-grow">
          <Navbar />
          <div
            id="page-top-spacer"
            className="h-12 from-transparent to-neutral-800"
          ></div>
          {children}
          <div id="page-bottom-spacer" className="bottom-1/4 h-16"></div>
        </main>
        <footer className="m-4 rounded-lg bg-white shadow dark:bg-gray-800">
          <div className="mx-auto w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2024{" "}
              <a href="https://ehicouldeat.com/" className="hover:underline">
                ehicouldeat
              </a>
              . All Rights Reserved.
            </span>
            <ul className="mt-3 flex flex-wrap items-center text-sm font-medium text-gray-500 sm:mt-0 dark:text-gray-400">
              <li>
                <a href="/" className="me-4 hover:underline md:me-6">
                  Home
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </body>
    </html>
  );
}
