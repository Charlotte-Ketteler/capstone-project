import { HorsesList } from "@/lib/data";
import styled from "styled-components";

import {
  DeleteButtonOverview,
  CardStyled,
  DateStyled,
  BoldPTag,
  InfoBackground,
  Line,
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
        <DateStyled>
          <BoldPTag>Datum:</BoldPTag> {bookedTimeslot?.currentDate}
        </DateStyled>
        <InfoBackground>
          <div>
            <BoldPTag>Uhrzeit: </BoldPTag>
            {bookedTimeslot?.startTime}
          </div>
          <br />
          <Line />
          <div>
            <BoldPTag>Personen:</BoldPTag> {recentlyBooked?.numberOfPeople}
          </div>
          <br />
          <Line />
          <BoldPTag> Pferde:</BoldPTag>
          <ul>
            {recentlyBooked?.horses.map((horseID) => (
              <li key={horseID}>
                {HorsesList.find((horse) => horse.id === horseID).name}
              </li>
            ))}
          </ul>
        </InfoBackground>
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
      </CardStyled>
    </>
  );
}
