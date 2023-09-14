import { HorsesList } from "@/lib/data";
import styled from "styled-components";

import {
  DeleteButtonOverview,
  CardStyled,
  DateStyled,
  BoldPTag,
} from "./index.styled";

export default function BookingOverview({
  timeSlots,
  recentlyBooked,
  onHandleDelete,
}) {
  const bookedTimeslot = timeSlots.find(
    (entry) => entry.id === recentlyBooked?.timeslot_id
  );
  return (
    <>
      <CardStyled>
        <DeleteButtonOverview
          type="button"
          onClick={() =>
            onHandleDelete(
              recentlyBooked.timeslot_id,
              recentlyBooked.booking_id
            )
          }
        >
          x
        </DeleteButtonOverview>
        <DateStyled>
          <BoldPTag>Datum:</BoldPTag> {bookedTimeslot?.currentDate}
        </DateStyled>
        <div>
          <BoldPTag>Uhrzeit: </BoldPTag>
          {bookedTimeslot?.startTime}
        </div>
        <div>
          <BoldPTag>Personen:</BoldPTag> {recentlyBooked?.numberOfPeople}
        </div>
        <BoldPTag> Pferde:</BoldPTag>
        <ul>
          {recentlyBooked?.horses.map((horseID) => (
            <li key={horseID}>
              {HorsesList.find((horse) => horse.id === horseID).name}
            </li>
          ))}
        </ul>
      </CardStyled>
    </>
  );
}

const ImageStyled = styled.img`
  border-radius: 20px;
`;
