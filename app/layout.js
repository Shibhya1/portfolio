import { Playfair_Display, DM_Mono, DM_Sans, Cinzel } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-cinzel",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
});

export const metadata = {
  title: "Shibhya Kaimal — Software Engineer",
  description:
    "Portfolio of Shibhya Kaimal — M.S. CS student at USC. Fullstack developer specializing in distributed systems, cloud infrastructure, and real-time data.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${cinzel.variable} ${dmMono.variable} ${dmSans.variable} bg-bg text-text font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}