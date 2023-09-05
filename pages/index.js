import Head from "next/head";
import { Inter } from "next/font/google";
import Link from "next/link";
import { CardStyled } from "@/Styles/CardStyled";
import BookingOverview from "@/components/BookingOverview";

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
        <h2>Dein nächster Termin:</h2>
        <BookingOverview
          recentlyBooked={recentlyBooked}
          timeSlots={timeSlots}
          onHandleDelete={onHandleDelete}
        />
      </main>
    </>
  );
}
