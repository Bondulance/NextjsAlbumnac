import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <body>
      <main className="relative">
        <Navbar />
        <section>{children}</section>
        <Footer />
      </main>
    </body>
  );
};

export default Layout;
