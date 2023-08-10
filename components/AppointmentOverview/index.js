export default function AppointmentOverview({
  numberOfPeople,
  selectedHorses,
  horsesList,
}) {
  return (
    <>
      <p>Personenanzahl: {numberOfPeople}</p>
      <p>Ausgewählte Pferde:</p>
      <ul>
        {selectedHorses.map((horseId) => (
          <li key={horseId}>
            {horsesList.find((horse) => horse.id === horseId)?.name}
          </li>
        ))}
      </ul>
    </>
  );
}
