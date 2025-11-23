import { Geist, Geist_Mono, Stack_Sans_Notch } from "next/font/google";


export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const headingFont = Stack_Sans_Notch({
  subsets: ["latin"],
  variable: "--font-stack-sans-notch",
  weight: "variable",
});
