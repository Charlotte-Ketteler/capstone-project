import { useState } from 'react';
import styled from 'styled-components';
import { TimeSlotsAndBookings, HorsesList } from '../../lib/data.js';



const BookingForm = ({ numberOfPeople, selectedHorseIds, handleNumberOfPeopleChange, handleHorseChange, horsesList }) => {
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <label>
        Personenanzahl:
        
        <select value={numberOfPeople} onChange={(e) => handleNumberOfPeopleChange(e.target.value)}>
          {Array.from({ length: 8 }, (_, i) => i + 1).map((count) => (
            <option key={count} value={count}>
              {count}
            </option>
          ))}
        </select>
      </label>
      {Array.from({ length: numberOfPeople }, (_, index) => (
        <label key={index}>
          Pferd für Person {index + 1}:
          <select
            value={selectedHorseIds[index] || ''}
            onChange={(e) => handleHorseChange(index, e.target.value)}
          >
             <option value="">Select a horse</option>
            {horsesList.map((horse) => (
              <option
              key={horse.id}
              value={horse.id}
              disabled={selectedHorseIds.some((id, i) => id === horse.id && i !== index)}
            >
              {horse.name}
            </option>
            ))}
          </select>
        </label>
      ))}
      <button type="submit">Book</button>
    </form>
  );
};

const TimeSlotButton = ({ timeSlot, horsesList }) => {
  const [showForm, setShowForm] = useState(false);
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const initialSelectedHorseIds = Array.from({ length: numberOfPeople }, (_, i) => horsesList[i]?.id || null);
  const [selectedHorseIds, setSelectedHorseIds] = useState(initialSelectedHorseIds);
  const toggleForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };
  const handleNumberOfPeopleChange = (value) => {
    setNumberOfPeople(parseInt(value));
    setSelectedHorseIds(Array.from({ length: parseInt(value) }, () => horsesList[0]?.id || null));
  };
  const handleHorseChange = (personIndex, horseId) => {
    setSelectedHorseIds((prevSelectedHorseIds) => {
      const updatedHorseIds = [...prevSelectedHorseIds];
      updatedHorseIds[personIndex] = horseId;
      return updatedHorseIds;
    });
  };
  return (
    <div>
      <ButtonsTimeSlots onClick={toggleForm}>
        {timeSlot.startTime} - {timeSlot.endTime}
      </ButtonsTimeSlots>
      {showForm && (
        <BookingForm
          numberOfPeople={numberOfPeople}
          selectedHorseIds={selectedHorseIds}
          handleNumberOfPeopleChange={handleNumberOfPeopleChange}
          handleHorseChange={handleHorseChange}
          horsesList={horsesList}
        />
      )}
    </div>
  );
};

const TimeSlotBookingApp = () => {
  return (
    <div>
      {TimeSlotsAndBookings.map((timeSlot) => (
        <TimeSlotButton key={timeSlot.id} timeSlot={timeSlot} horsesList={HorsesList} />
      ))}
    </div>
  );
};

const ButtonsTimeSlots = styled.button`
  display: flex;
  flex-direction: row;
  gap: 30px;
  background-color: white;
  border-radius: 5px;
`;

export default TimeSlotBookingApp;


