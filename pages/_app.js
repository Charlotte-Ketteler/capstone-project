import Head from "next/head";
import Layout from "@/components/Layout";
import GlobalStyle from "@/styles";
import { TimeSlotsAndBookings } from "@/lib/data";
import { useRouter } from "next/router";
import useLocalStorageState from "use-local-storage-state";
import { useState } from "react";
import { getCurrentDate } from "@/lib/data";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [timeSlots, setTimeSlots] = useLocalStorageState("timeSlots", {
    defaultValue: TimeSlotsAndBookings,
  });
  const [recentlyBooked, setRecentlyBooked] = useLocalStorageState(
    "recentlyBooked",
    { defaultValue: []}
  );

 console.log("Show me recentlyBooked on app.js:", recentlyBooked)
 
  function handleSubmit(booking) {
    
    const timeSlotToBeUpdated = timeSlots.find(
      (slot) => slot.id === booking.id
    );
    if (timeSlotToBeUpdated) {
      const horsesBooked = booking.horses.map((horseID) => ({
        horseId: horseID,
      }));
      const bookingID = Math.random().toString(32).substring(2);
      const updatedTimeSlot = {
        ...timeSlotToBeUpdated,
        bookings: [
          ...timeSlotToBeUpdated.bookings,
          {
            id: bookingID,
            numberOfPeople: booking.numberOfPeople,
            horses: horsesBooked,
          },
        ],
      };
      setTimeSlots(
        timeSlots.map((slot) =>
          slot.id === booking.id ? updatedTimeSlot : slot
        )
      );
      setRecentlyBooked({ ...booking, bookingID });

      router.push("/BookingSuccessful");
    }
  }

  function handleDelete(id, bookingID) {
    setTimeSlots(
      timeSlots.map((slot) =>
        slot.id === id
          ? {
              ...slot,
              bookings: slot.bookings.filter(
                (booking) => booking.id !== bookingID
              ),
            }
          : slot
      )
    );
    setRecentlyBooked(null);

    router.push("/BookingOverviewPage");
  }

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <Layout>
        <Component
          {...pageProps}
          timeSlots={timeSlots}
          onHandleSubmit={handleSubmit}
          recentlyBooked={recentlyBooked}
          handleDelete={handleDelete}
        />
      </Layout>
    </>
  );
}
