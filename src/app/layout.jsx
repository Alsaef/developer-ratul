import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import AppBar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ParticlesBackground from "@/components/UI/background-transperant/Particle";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AL SAEF RATUL",
  description:
    "AL SAEF RATUL · Web Developer (Frontend-React.JS) · 1+ year in Web Application Development, Coding, Programming, Testing, Data Management, Project Management.",
  openGraph: {
    url: "https://developer-ratul.vercel.app/",
    type: "website",
    title: "AL SAEF RATUL",
    description:
      "AL SAEF RATUL · Web Developer (Frontend-React.JS) · 1+ year in Web Application Development, Coding, Programming, Testing, Data Management, Project Management.",
    images: [
      {
        url: "https://raw.githubusercontent.com/Alsaef/image/refs/heads/main/my-bg-02d338d3.png",
        width: 1200,
        height: 630,
        alt: "AL SAEF RATUL Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AL SAEF RATUL",
    description:
      "AL SAEF RATUL · Web Developer (Frontend-React.JS) · 1+ year in Web Application Development, Coding, Programming, Testing, Data Management, Project Management.",
    images: [
      {
        url: "https://raw.githubusercontent.com/Alsaef/image/refs/heads/main/my-bg-02d338d3.png",
        alt: "AL SAEF RATUL Portfolio",
      },
    ],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased overflow-x-hidden`}
      >
        <ParticlesBackground></ParticlesBackground>
       <AppBar/>
        <div className="min-h-screen ">
        {children}
        </div>
      <Footer></Footer>
      </body>
    </html>
  );
}
