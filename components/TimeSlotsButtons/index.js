import { useState } from 'react';
import styled from 'styled-components';
import { TimeSlotsAndBookings, HorsesList } from '../../lib/data.js';

const BookingForm = ({ timeSlot, horsesList }) => {
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [selectedHorseIds, setSelectedHorseIds] = useState(Array.from({ length: 1 }, () => horsesList[0]?.id || null));

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission here, e.g., make an API call to book the time slot with the selected data
  };

  const handleHorseChange = (index, horseId) => {
    const updatedHorseIds = [...selectedHorseIds];
    updatedHorseIds[index] = horseId;
    setSelectedHorseIds(updatedHorseIds);
  };

  const availableHorses = (index) => {
    const selectedHorses = selectedHorseIds.filter((_, i) => i !== index);
    return horsesList.filter((horse) => !selectedHorses.includes(horse.id));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Personenanzahl:
        <select value={numberOfPeople} onChange={(e) => setNumberOfPeople(e.target.value)}>
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
            {availableHorses(index).map((horse) => (
              <option key={horse.id} value={horse.id}>
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

  const toggleForm = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  return (
    <div>
      <ButtonsTimeSlots onClick={toggleForm}>
        {timeSlot.startTime}
      </ButtonsTimeSlots>
      {showForm && <BookingForm timeSlot={timeSlot} horsesList={horsesList} />}
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