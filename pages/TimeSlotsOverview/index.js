/*

export default function createTimeSlot(startHour, endHour) {
    const startDate = new Date();
    startDate.setHours(startHour, 0, 0, 0);
    const endDate = new Date();
    endDate.setHours(endHour, 0, 0, 0);
  
    // You can return the start and end dates here, or any other representation of the time slot you need.
    return { start: startDate, end: endDate };
  }
  
  const TimeSlotButton = ({ startHour, endHour, onClick }) => {
    const handleClick = () => {
      const timeSlot = createTimeSlot(startHour, endHour);
      onClick(timeSlot);
    };
  
    return (
      <button onClick={handleClick}>
        {startHour}:00 - {endHour}:00
      </button>
    );
  };*/


import TimeSlotsButtons from "@/components/TimeSlotsButtons";

export default function TimeSlotsOverview(){
    return(
        <>
        <h1>Test</h1>
        <TimeSlotsButtons/>
        </>
    )
}