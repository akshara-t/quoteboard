import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const fontClasses = [geistSans.variable, geistMono.variable].join(' ');
  
  return (
    <html lang="en" className={fontClasses}>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
