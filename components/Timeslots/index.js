import TimeslotButton from "../TimeSlotsButton";
import { styled } from "styled-components";
import { Body } from "@/Styles/Body";

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

