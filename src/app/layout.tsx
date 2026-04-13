import type { Metadata } from "next";
import { Sora, Outfit, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
    variable: "--font-sora",
    display: "swap",
});

const outfit = Outfit({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
    variable: "--font-outfit",
    display: "swap",
});

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    variable: "--font-inter",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Stake | Premium Property Investment",
    description:
        "Discover high-growth property investments. Join the CEG Equity Token batch and start building your portfolio with fractional ownership of global assets.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1"
                />
            </head>
            <body
                className={`${sora.variable} ${outfit.variable} ${inter.variable} font-sans antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
