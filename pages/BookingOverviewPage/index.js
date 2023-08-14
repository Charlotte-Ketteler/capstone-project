import BookingOverview from "@/components/BookingOverview";


export default function BookingOverviewPage({
  recentlyBooked,
  timeslots
}) {

  return (
    <>
    <h1>Terminübersicht</h1>
    <BookingOverview recentlyBooked={recentlyBooked}  timeslots={timeslots}/>
    </>
  );
}
