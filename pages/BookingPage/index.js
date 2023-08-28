import Timeslots from "@/components/Timeslots";
import Link from "next/link";
import { getCurrentDate } from "@/lib/data";

export default function BookingPage({
  onHandleDelete,
  timeSlots,
  onHandleSubmit,
  recentlyBooked,
}) {
  return (
    <>
      <p>Datum: {getCurrentDate()} </p>
      <Timeslots
        onHandleDelete={onHandleDelete}
        timeSlots={timeSlots}
        onHandleSubmit={onHandleSubmit}
        recentlyBooked={recentlyBooked}
      />
      <Link href="/">Back to Homepage</Link>
    </>
  );
} 