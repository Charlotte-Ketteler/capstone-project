import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BookingList from ".";


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



test("show label input", () => {
  render(<BookingList timeslot={timeslot} onHandleDelete={() => console.log("delete")} />);
  const label = screen.getByText("Nachricht:");
  const xyz = screen.getByRole("button", {name: /senden/i})
  expect(label).toBeInTheDocument();
  expect(xyz).toBeInTheDocument();

});
