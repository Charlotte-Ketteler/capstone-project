import Timeslots from "@/components/Timeslots";
import { getCurrentDate } from "@/lib/data";
import styled from "styled-components";

export default function BookingPage({
  onHandleDelete,
  timeSlots,
  onHandleSubmit,
  recentlyBooked,
}) {
  return (
    <>
      <Date>Datum: {getCurrentDate()} </Date>
      <Timeslots
        onHandleDelete={onHandleDelete}
        timeSlots={timeSlots}
        onHandleSubmit={onHandleSubmit}
        recentlyBooked={recentlyBooked}
      />
    </>
  );
}

const Date = styled.p`
  margin-left: 10%;
`;
