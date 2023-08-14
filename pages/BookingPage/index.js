
import Timeslots from "@/components/Timeslots";
import Link from "next/link";

export default function BookingPage({
  horsesList, 
  numberOfPeople,
  selectedHorses,
  handleNumberOfPeopleChange,
  handleSelectHorse,
  handleSubmit,
  showForm,
  appointmentTime,
  toggleForm,
  TimeSlotsAndBookings,
  timeSlots,
  onHandleSubmit,
  
}) {

  return (
    <>
      <Timeslots
        horsesList={horsesList}
        numberOfPeople={numberOfPeople}
        selectedHorses={selectedHorses}
        handleNumberOfPeopleChange={handleNumberOfPeopleChange}
        handleSelectHorse={handleSelectHorse}
        handleSubmit={handleSubmit}
        showForm={showForm}
        appointmentTime={appointmentTime}
        toggleForm={toggleForm}
        TimeSlotsAndBookings={TimeSlotsAndBookings}
        timeSlots={timeSlots}
        onHandleSubmit={onHandleSubmit} 
        
      />
       <Link href="/">Back to Homepage</Link>
    </>
  );
}
