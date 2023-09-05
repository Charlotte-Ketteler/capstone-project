import { render, screen, fireEvent } from "@testing-library/react";
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

test("DeleteButton calls onHandleDelete", () => {
  const mockOnHandleDelete = jest.fn();

  render(
    <BookingList timeslot={timeslot} onHandleDelete={mockOnHandleDelete} />
  );

  const deleteButton = screen.getByText("Buchung löschen");
  fireEvent.click(deleteButton);

  expect(mockOnHandleDelete).toHaveBeenCalledWith(
    timeslot.id,
    timeslot.bookings[0].id
  );
});
