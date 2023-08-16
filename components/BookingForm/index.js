import styled from "styled-components";
import { HorsesList } from "@/lib/data";
import useLocalStorageState from "use-local-storage-state";
import { useState } from "react";
export default function BookingForm({ onHandleSubmit, appointment, onAddBooking }) {
  {
  
  }
  const numberOfPeopleBooked = appointment.bookings.reduce(
    (acc, curr) => acc + curr.numberOfPeople,
    0
  );
  const horsesAlreadySelected = appointment.bookings.reduce((acc, curr) => {
    const bookedHorses = curr.horses.map((horse) => horse.horseId);
    acc.push(...bookedHorses);
    return acc;
  }, []);
  const [numberOfPeople, setNumberOfPeople] = useState(numberOfPeopleBooked ?? 1
  );
  {
   
  }
  const [selectedHorses, setSelectedHorses] = useState(horsesAlreadySelected);

  function handleSubmit(event) {
    event.preventDefault();
    //const formElements = event.target.value;
    //onAddBooking(formElements.booking.value)
    const booking = {
      id: appointment.id,
      numberOfPeople: numberOfPeople,
      horses: selectedHorses, 
      startTime: appointment.startTime,
      endTime: appointment.endTime
    };
    onHandleSubmit(booking);
  }

  const handleNumberOfPeopleChange = (event) => {
    setNumberOfPeople(parseInt(event.target.value));
    setSelectedHorses([]);
  };
  //hier wird festgelegt, wie viele Pferde man je nach Person auswählen kann
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
        <select value={numberOfPeople}  onChange={handleNumberOfPeopleChange}>
          {Array.from({ length: 8 }, (_, i) => i + 1).map((count) => (
            <option key={count} value={count}>
              {count}
            </option>
          ))}
        </select>
      </label>

      <div>
        <label>Du kannst bis zu {numberOfPeople} Pferde auswählen:</label>
        {HorsesList.map(({ id, name }) => (
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
