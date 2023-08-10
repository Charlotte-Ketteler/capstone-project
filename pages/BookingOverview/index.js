
import AppointmentOverview from "@/components/AppointmentOverview";

export default function BookingOverview({
  horsesList,
  numberOfPeople,
  handleNumberOfPeopleChange,
  handleSelectHorse,
  handleSubmit,
  selectedHorses,  
  showForm,
  appointmentTime
}) {

  return (
    <>
    <h1>Terminübersicht</h1>
      <AppointmentOverview
        handleSelectHorse={handleSelectHorse}
        horsesList={horsesList}
        numberOfPeople={numberOfPeople}
        selectedHorses={selectedHorses}
        handleNumberOfPeopleChange={handleNumberOfPeopleChange}
        handleSubmit={handleSubmit}
        showForm={showForm}
        appointmentTime={ appointmentTime}
  />
    </>
  );
}
