import BookingOverview from "@/components/BookingOverview";
import { BookingSuccessfulH1 } from "./index.styled";

export default function BookingOverviewPage({
  recentlyBooked,
  timeSlots,
  onHandleDelete,
}) {
  return (
    <>
      <BookingSuccessfulH1>Deine Buchung war erfolgreich</BookingSuccessfulH1>
      <BookingOverview
        recentlyBooked={recentlyBooked}
        timeSlots={timeSlots}
        onHandleDelete={onHandleDelete}
      />
    </>
  );
}

