import styled from "styled-components";
import { HorsesList } from "@/lib/data";
import { useState } from "react";

export default function BookingForm({
  timeSlotID,
  onHandleSubmit,
  booking,
  available = 8,
  availableHorses = HorsesList,
}) {
  const [numberOfPeople, setNumberOfPeople] = useState(
    booking?.numberOfPeople ?? 1
  );

  const [selectedHorses, setSelectedHorses] = useState(
    booking?.horses.map((horse) => horse.horseId) || []
  );

  function handleSubmit(event) {
    event.preventDefault();
    const bookingInfo = {
      timeslot_id: timeSlotID,
      booking_id: booking?.id,
      numberOfPeople: numberOfPeople,
      horses: selectedHorses,
    };
    onHandleSubmit(bookingInfo);
  }

  const handleNumberOfPeopleChange = (event) => {
    setNumberOfPeople(parseInt(event.target.value));
    setSelectedHorses([]);
  };

  function handleSelectHorse(id) {
    if (!selectedHorses.includes(id)) {
      if (selectedHorses.length === numberOfPeople) {
        return;
      }
      setSelectedHorses([...selectedHorses, id]);
    } else {
      setSelectedHorses(selectedHorses.filter((horseID) => horseID !== id));
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Personenanzahl:
        <select value={numberOfPeople} onChange={handleNumberOfPeopleChange}>
          {Array.from({ length: available }, (_, i) => i + 1).map((count) => (
            <option key={count} value={count}>
              {count}
            </option>
          ))}
        </select>
      </label>

      <div>
        <label>Du kannst bis zu {numberOfPeople} Pferde auswählen:</label>
        {availableHorses.map(({ id, name }) => (
          <Chip
            key={id}
            type="button"
            selected={selectedHorses.includes(id)}
            onClick={() => handleSelectHorse(id)}
          >
            {name}
          </Chip>
        ))}
      </div>
      <button type="submit">Buchen</button>
    </form>
  );
}

const Chip = styled.button`
  padding: 3px 10px;
  margin: 0px 5px;
  border-radius: 10px;
  background-color: ${({ selected }) =>
    selected ? "rgb(118,181,197)" : "rgb(171,219,227)"};
  border-color: rgb(171, 219, 227);
`; 