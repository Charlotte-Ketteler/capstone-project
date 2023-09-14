import TimeslotButton from "../TimeSlotsButton";
import styled from "styled-components";

export default function Timeslots({
  onHandleSubmit,
  timeSlots,
  recentlyBooked,
  onHandleDelete,
}) {
  return (
    <Body>
      {timeSlots.map((timeslot) => (
        <TimeslotButton
          key={timeslot.id}
          timeslot={timeslot}
          onHandleSubmit={onHandleSubmit}
          recentlyBooked={recentlyBooked}
          onHandleDelete={onHandleDelete}
        />
      ))}
    </Body>
  );
}

export const Body = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 30%;
  overflow-y: scroll;
  margin-bottom: 40px;
`;
