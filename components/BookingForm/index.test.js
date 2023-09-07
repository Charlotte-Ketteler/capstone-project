import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BookingForm from ".";
import { HorsesList } from "@/lib/data";

const availableHorses = HorsesList;

test("form is visible with all input fields and textarea", () => {
  render(<BookingForm availableHorses={availableHorses} />);
  const Personenanzahl = screen.getByLabelText(/personenanzahl/i);

  const submitButton = screen.getByRole("button", { name: /buchen/i });
  expect(Personenanzahl).toBeInTheDocument();

  expect(submitButton).toBeInTheDocument();
});
