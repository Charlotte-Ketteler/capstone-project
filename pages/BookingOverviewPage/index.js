import BookingOverview from "@/components/BookingOverview";

export default function BookingOverviewPage({
  recentlyBooked,
  timeSlots,
  onHandleDelete,
}) {
  return (
    <>
      <h1>Terminübersicht</h1>
      <BookingOverview
        recentlyBooked={recentlyBooked}
        timeSlots={timeSlots}
        onHandleDelete={onHandleDelete}
      />
    </>
  );
}