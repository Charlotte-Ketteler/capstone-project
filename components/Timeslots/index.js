import TimeslotButton from "../TimeSlotsButton";
import { TimeSlotsAndBookings, HorsesList } from "@/lib/data.js";

export default function Timeslots() {
  return (
    <div>
      {TimeSlotsAndBookings.map((timeSlot) => (
        <TimeslotButton
          key={timeSlot.id}
          timeSlot={timeSlot}
          horsesList={HorsesList}
        />
      ))}
    </div>
  );
}
