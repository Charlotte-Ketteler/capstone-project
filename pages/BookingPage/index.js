import Timeslots from "@/components/Timeslots";
import { getCurrentDate } from "@/lib/data";
import styled from "styled-components";
import { ButtonBody } from "./index.styled";

export default function BookingPage({
  onHandleDelete,
  timeSlots,
  onHandleSubmit,
  recentlyBooked,
}) {
  return (
    <>
     <ButtonBody>
      <Date>Datum: {getCurrentDate()} </Date>
     
      <Timeslots
        onHandleDelete={onHandleDelete}
        timeSlots={timeSlots}
        onHandleSubmit={onHandleSubmit}
        recentlyBooked={recentlyBooked}
      />
      </ButtonBody>
    </>
  );
}

const Date = styled.p`
  margin-left: 10%;
`;
