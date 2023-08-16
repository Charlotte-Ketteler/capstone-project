import Head from "next/head";
import Layout from "@/components/Layout";
import GlobalStyle from "@/styles";
import { TimeSlotsAndBookings } from "@/lib/data";
import { useRouter } from "next/router";
import useLocalStorageState from "use-local-storage-state";


export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [timeSlots, setTimeSlots] = useLocalStorageState("timeSlotsState", {defaultValue: TimeSlotsAndBookings});
  const [recentlyBooked, setRecentlyBooked] = useLocalStorageState("recentlyBookedState");

 
{/*Dieser Code verwaltet den Buchungsprozess, indem er den Status mit den gebuchten Termininformationen aktualisiert, die Zeitfensterdaten aktualisiert und zu einer Erfolgsseite navigiert.*/}
  function handleSubmit(booking) {
  
    console.log(booking)
    setRecentlyBooked(booking); 
    const timeSlotToBeUpdated = timeSlots.find((slot) => slot.id === booking.id);
    if (timeSlotToBeUpdated) { 
      const horsesBooked = booking.horses.map((horseID) => ({ horseId: horseID }));
      const updatedTimeSlot = { ...timeSlotToBeUpdated, bookings: [{ numberOfPeople: booking.numberOfPeople, horses: horsesBooked }] }
      setTimeSlots(timeSlots.map((slot) => slot.id === booking.id ? updatedTimeSlot : slot));
      router.push("/BookingSuccessful");
    }
 
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
     
        />
      </Layout>
    </>
  );
} 