import BookingOverview from "@/components/BookingOverview";
import styled from "styled-components";

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

const BookingSuccessfulH1 = styled.p`
  font-size: 30px;
  margin-top: 120px;
  margin-left: 35px;
`;
