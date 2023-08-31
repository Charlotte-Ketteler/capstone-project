import BookingOverview from "@/components/BookingOverview";

export default function BookingOverviewPage({
  recentlyBooked,
  timeSlots,
  onHandleDelete,
}) {
  return (
    <>
      <h1>Deine Buchung war erfolgreich</h1>
      <BookingOverview
        recentlyBooked={recentlyBooked}
        timeSlots={timeSlots}
        onHandleDelete={onHandleDelete}
      />
    </>
  );
}