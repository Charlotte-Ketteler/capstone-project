import TimeslotButton from "../TimeSlotsButton";

export default function Timeslots({
  onHandleSubmit,
  timeSlots,
  recentlyBooked,
  onHandleDelete,
}) {
  return (
    <div>
      {timeSlots.map((timeslot) => (
        <TimeslotButton
          key={timeslot.id}
          timeslot={timeslot}
          onHandleSubmit={onHandleSubmit}
          recentlyBooked={recentlyBooked}
          onHandleDelete={onHandleDelete}
        />
      ))}
    </div>
  );
} 