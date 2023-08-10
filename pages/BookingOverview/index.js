
import AppointmentOverview from "@/components/AppointmentOverview";

export default function BookingOverview({
  horsesList,
  numberOfPeople,
  handleNumberOfPeopleChange,
  handleSelectHorse,
  handleSubmit,
  selectedHorses
}) {

  return (
    <>
      <AppointmentOverview
        handleSelectHorse={handleSelectHorse}
        horsesList={horsesList}
        numberOfPeople={numberOfPeople}
        selectedHorses={selectedHorses}
        handleNumberOfPeopleChange={handleNumberOfPeopleChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
}
