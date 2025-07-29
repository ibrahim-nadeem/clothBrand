import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Hero from "../../app/components/hero";
import Navbar from "../../app/components/navBar";
import CollectionGrid from "../../app/components/collections";
import TopNav from "../../app/components/topNav";
 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
    <TopNav />
     <Navbar />
       <Hero />  
       <CollectionGrid />
      
    </>
  );
}
