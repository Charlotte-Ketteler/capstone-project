import { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

export default function BookingForm({ horsesList }) {
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [selectedHorses, setSelectedHorses] = useState([]);
  const [
    numberOfPeopleAppointmentOverview,
    setNumberOfPeopleAppointmentOverview,
  ] = useState("");
  const [selectedHorseNames, setSelectedHorseNames] = useState([]);

  const router = useRouter();

  const handleNumberOfPeopleChange = (event) => {
    setNumberOfPeople(parseInt(event.target.value));
    setSelectedHorses([]);
    setSelectedHorseNames([]);
  };

  function handleSelectHorse(id, name) {
    console.log("Hi");
    if (!selectedHorses.includes(id)) {
      if (selectedHorses.length === numberOfPeople) {
        return;
      }
      setSelectedHorses([...selectedHorses, id]);
      setSelectedHorseNames([...selectedHorseNames, name]);
    } else {
      setSelectedHorses(selectedHorses.filter((horseID) => horseID !== id));
      setSelectedHorseNames(
        selectedHorseNames.filter((horseName) => horseName !== name)
      );
      setTimeslot("Timeslot");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    router.push("/BookingSuccessful");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label
        value={numberOfPeopleAppointmentOverview}
        type=""
        required
        onChange={(event) =>
          setNumberOfPeopleAppointmentOverview(event.target.value)
        }
      >
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
        {horsesList.map(({ name, id }) => (
          <Chip
            key={id}
            type="button"
            selected={selectedHorses.some(
              (selectedHorseID) => id === selectedHorseID
            )}
            onClick={() => handleSelectHorse(id, name)}
          >
            {name}
          </Chip>
        ))}
      </div>
      <button type="submit">Buchen</button>

      <p>Personenanzahl: {numberOfPeopleAppointmentOverview}</p>
      <p>Ausgewählte Pferde:</p>
      <ul>
        {selectedHorseNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
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
