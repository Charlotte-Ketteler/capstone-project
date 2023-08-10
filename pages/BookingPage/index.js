
import Timeslots from "@/components/Timeslots";

export default function BookingPage({horsesList, numberOfPeople,
  selectedHorses,
  handleNumberOfPeopleChange,
  handleSelectHorse,
  handleSubmit,
  showForm,
  appointmentTime,
  toggleForm,
  TimeSlotsAndBookings}) {

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
      />
    </>
  );
}
