import Timeslots from "@/components/Timeslots";
import { getCurrentDate } from "@/lib/data";
import styled from "styled-components";
import { BoldPTag } from "@/components/BookingOverview/index.styled";

export default function BookingPage({
  onHandleDelete,
  timeSlots,
  onHandleSubmit,
  recentlyBooked,
}) {
  return (
    <>
      <ButtonBody>
        <Date>
          <BoldPTag>Datum:</BoldPTag> {getCurrentDate()}{" "}
        </Date>

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

export const ButtonBody = styled.div`
  margin-top: 120px;
`;
export const Date = styled.p`
  margin: 20px 0px 20px 50px;
  font-size: 13px;
`;
