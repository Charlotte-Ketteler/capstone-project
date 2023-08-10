import TimeslotButton from "../TimeSlotsButton";


export default function Timeslots({showForm, toggleForm, TimeSlotsAndBookings, horsesList, selectedHorses, handleSelectHorse, handleNumberOfPeopleChange}) {
 

  
  return (
    <div>
      {TimeSlotsAndBookings.map((timeSlot) => (
        <TimeslotButton
          key={timeSlot.id}
          timeSlot={timeSlot}
          horsesList={horsesList}
          showForm={showForm}
          toggleForm={toggleForm}
          selectedHorses={selectedHorses}
          handleSelectHorse={handleSelectHorse}
          handleNumberOfPeopleChange={handleNumberOfPeopleChange}
        />
      ))}
    </div>
  );
}
