import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Casalago",
    description: "",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className}  text-[#221e1f]`}>
                <div className="2xl:px-24 xl:px-20 lg:px-16 md:px-10 sm:px-5 px-2">
                    <Header />
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    );
}
