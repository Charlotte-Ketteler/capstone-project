
import Timeslots from "@/components/Timeslots";
import Link from "next/link";
import { getCurrentDate } from "@/lib/data";

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
  recentlyBooked

  
}) {

  return (
    <>
    <p>Datum: {getCurrentDate()} </p>
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
        recentlyBooked={recentlyBooked}
      />
       <Link href="/">Back to Homepage</Link>
    </>
  );
}