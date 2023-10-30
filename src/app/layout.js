import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog App Next.js",
  description:
    "A Next.js blog post app is a high-performance, SEO-friendly platform for creating and managing blog content. It features server-side rendering, efficient routing, and responsive design. With dynamic content, authentication, and customizability, it provides a seamless blogging experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}