import TimeslotButton from "../TimeSlotsButton";

export default function Timeslots({ onHandleSubmit, timeSlots, numberOfPeople, recentlyBooked }) {

  return (
    <div>
      {timeSlots.map((appointment) => (
        <TimeslotButton
          key={appointment.id}
          appointment={appointment}
          onHandleSubmit={onHandleSubmit}
          numberOfPeople={numberOfPeople}
          recentlyBooked={recentlyBooked}
        />
      ))}
    </div>
  );
} 