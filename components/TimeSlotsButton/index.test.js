import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TimeslotButton from ".";

const timeslot = {
  id: 1,
  startTime: "08:00",
  endTime: "08:50",
  bookings: [
    {
      id: 1,
      numberOfPeople: 6,
      horses: [
        {
          horseId: 1,
        },
        {
          horseId: 3,
        },
        {
          horseId: 5,
        },
        {
          horseId: 6,
        },
        {
          horseId: 7,
        },
      ],
    },
  ],
};

test("toggles the form when the button is clicked", () => {
  render(<TimeslotButton timeslot={timeslot} />);

  const buttonText = `${timeslot.startTime} - ${timeslot.endTime}`;
  const button = screen.getByText(buttonText);

  expect(
    screen.queryByText("Bereits gebucht: 6")
  ).not.toBeInTheDocument();
  expect(screen.queryByText("x")).not.toBeInTheDocument();
  expect(screen.queryByText("Neue Buchung")).not.toBeInTheDocument();

  fireEvent.click(button);

  expect(screen.getByText("Bereits gebucht: 6")).toBeInTheDocument();
  expect(screen.getByText("x")).toBeInTheDocument();

  expect(screen.getByText("Neue Buchung")).toBeInTheDocument();
});
