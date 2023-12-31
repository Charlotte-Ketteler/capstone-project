import Head from "next/head";
import Layout from "@/components/Layout";
import GlobalStyle from "@/styles";
import { TimeSlotsAndBookings } from "@/lib/data";
import { useRouter } from "next/router";
import useLocalStorageState from "use-local-storage-state";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [timeSlots, setTimeSlots] = useLocalStorageState("timeSlots", {
    defaultValue: TimeSlotsAndBookings,
  });
  const [recentlyBooked, setRecentlyBooked] = useLocalStorageState(
    "recentlyBooked",
    { defaultValue: null }
  );

  function handleSubmit(booking) {
    const timeSlotToBeUpdated = timeSlots.find(
      (slot) => slot.id === booking.timeslot_id
    );
    console.log(booking);
    if (timeSlotToBeUpdated) {
      const bookingToBeUpdated = timeSlotToBeUpdated.bookings.find(
        (b) => b.id === booking.booking_id
      );
      if (bookingToBeUpdated) {
        const horsesBooked = booking.horses.map((horseID) => ({
          horseId: horseID,
        }));
        const updatedTimeSlot = {
          ...timeSlotToBeUpdated,
          bookings: timeSlotToBeUpdated.bookings.map((entry) =>
            entry.id === booking.booking_id
              ? {
                  ...entry,
                  horses: horsesBooked,
                  numberOfPeople: booking.numberOfPeople,
                }
              : entry
          ),
        };
        setTimeSlots(
          timeSlots.map((slot) =>
            slot.id === booking.timeslot_id ? updatedTimeSlot : slot
          )
        );
        setRecentlyBooked({ ...booking });
      } else {
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
            slot.id === booking.timeslot_id ? updatedTimeSlot : slot
          )
        );
        setRecentlyBooked({ bookingID, ...booking });
      }

      router.push("/BookingOverviewPage");
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
          onHandleDelete={handleDelete}
        />
      </Layout>
    </>
  );
}
