import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import clsx from "clsx";

interface RootLayoutProps {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
};

export const viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head />
            <body
                className={clsx(
                    "min-h-screen bg-background font-sans antialiased",
                    fontSans.variable
                )}
            >
                <Providers
                    themeProps={{ attribute: "class", defaultTheme: "light" }}
                >
                    {children}
                </Providers>
            </body>
        </html>
    );
}
