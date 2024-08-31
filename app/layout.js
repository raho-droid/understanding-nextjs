import { Inter } from "next/font/google";
import "@/styles/variables.css";
import "@/styles/global.css";
import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";
import SecondBar from "@/layouts/SecondBar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} container `}>
        <Header />
        <SecondBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
