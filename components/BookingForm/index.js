import styled from "styled-components";
import { useState } from "react";
import { HorsesList } from "@/lib/data";

export default function BookingForm({ onHandleSubmit, appointment }) {
  {
    /*appointment ist ein Objekt, das eine Reihe von Buchungen enthält.
Die Funktion .reduce() iteriert über das bookings-Array.
Für jede Buchung (curr) wird die Anzahl der Personen aus dieser Buchung zum Akkumulator (acc) hinzugefügt.
Der Anfangswert des Akkumulators ist 0.
Das Ergebnis ist die Gesamtzahl der gebuchten Personen über alle Buchungen hinweg.*/
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
  const [numberOfPeople, setNumberOfPeople] = useState(
    numberOfPeopleBooked ?? 1
  );
  {
    /*If numberOfPeopleBooked is not null or undefined, then numberOfPeople will be initialized with the value of numberOfPeopleBooked.
  If numberOfPeopleBooked is null or undefined, then numberOfPeople will be initialized with the value 1.
In other words, the line of code ensures that numberOfPeople will be initialized with the number of people booked (numberOfPeopleBooked) if that value is available, and if not, it will default to 1. This is a concise way to handle possible null or undefined values and provide a fallback default value.*/
  }
  const [selectedHorses, setSelectedHorses] = useState(horsesAlreadySelected);

  function handleSubmit(event) {
    event.preventDefault();
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
        <select value={numberOfPeople} onChange={handleNumberOfPeopleChange}>
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
