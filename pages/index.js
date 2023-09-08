import Head from "next/head";
import { Inter } from "next/font/google";
import BookingOverview from "@/components/BookingOverview";
import Homepage from "@/components/Homepage";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ recentlyBooked, timeSlots, onHandleDelete }) {
  return (
    <>
      <Head>
        <title>Capstone Project</title>
        <meta name="description" content="Penguin Capstone Project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
    
       <Homepage/>
      </main>
    </>
  );
}
