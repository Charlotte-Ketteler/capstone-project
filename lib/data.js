export function getCurrentDate() {
  const currentDate = new Date();
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return currentDate.toLocaleDateString('de-DE', options);
}

export const TimeSlotsAndBookings = [
  {
    id: 1,
    startTime: "08:00",
    endTime: "08:50",
    currentDate: getCurrentDate(),
    bookings: [],
  },

  {
    id: 2,
    startTime: "09:00",
    endTime: "09:50",
    currentDate: getCurrentDate(),
    bookings: [],
  },
  {
    id: 3,
    startTime: "10:00",
    endTime: "10:50",
    currentDate: getCurrentDate(),
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
          {
            horseId: 8,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    startTime: "11:00",
    endTime: "11:50",
    currentDate: getCurrentDate(),
    bookings: [
      {
        id: 1,
        numberOfPeople: 8,
        horses: [
          {
            horseId: 1,
          },
          {
            horseId: 2,
          },
          {
            horseId: 3,
          },
          {
            horseId: 4,
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
          {
            horseId: 8,
          },
        ],
      },
    ],
  },
  {
    id: 5,
    startTime: "14:00",
    endTime: "14:50",
    currentDate: getCurrentDate(),
    bookings: [
      {
        id: 1,
        numberOfPeople: 4,
        horses: [
          {
            horseId: 1,
          },
          {
            horseId: 2,
          },
          {
            horseId: 5,
          },
          {
            horseId: 7,
          },
        ],
      },
    ],
  },
  {
    id: 6,
    startTime: "15:00",
    endTime: "15:50",
    currentDate: getCurrentDate(),
    bookings: [
      {
        id: 1,
        numberOfPeople: 3,
        horses: [
          {
            horseId: 4,
          },
          {
            horseId: 6,
          },
          {
            horseId: 8,
          },
        ],
      },
    ],
  },
  {
    id: 7,
    startTime: "16:00",
    endTime: "16:50",
    currentDate: getCurrentDate(),
    bookings: [
      {
        id: 1,
        numberOfPeople: 2,
        horses: [
          {
            horseId: 2,
          },
          {
            horseId: 4,
          },
        ],
      },
    ],
  },
  {
    id: 8,
    startTime: "17:00",
    endTime: "17:50",
    currentDate: getCurrentDate(),
    bookings: [
      {
        id: 1,
        numberOfPeople: 7,
        horses: [
          {
            horseId: 1,
          },
          {
            horseId: 2,
          },
          {
            horseId: 3,
          },
          {
            horseId: 4,
          },
          {
            horseId: 6,
          },
          {
            horseId: 7,
          },
          {
            horseId: 8,
          },
        ],
      },
    ],
  },
  {
    id: 9,
    startTime: "18:00",
    endTime: "18:50",
    currentDate: getCurrentDate(),
    bookings: [
      {
        id: 1,
        numberOfPeople: 4,
        horses: [
          {
            horseId: 1,
          },
          {
            horseId: 5,
          },
          {
            horseId: 7,
          },
          {
            horseId: 8,
          },
        ],
      },
    ],
  },
  {
    id: 10,
    startTime: "19:00",
    endTime: "19:50",
    currentDate: getCurrentDate(),
    bookings: [
      {
        id: 1,
        numberOfPeople: 3,
        horses: [
          {
            horseId: 1,
          },
          {
            horseId: 3,
          },
          {
            horseId: 4,
          },
        ],
      },
    ],
  },
];

export const HorsesList = [
  {
    id: 1,
    name: "Alistair",
  },
  {
    id: 2,
    name: "Balu",
  },
  {
    id: 3,
    name: "Casper",
  },
  {
    id: 4,
    name: "Dramna",
  },
  {
    id: 5,
    name: "Feivel",
  },
  {
    id: 6,
    name: "Garry",
  },
  {
    id: 7,
    name: "Rebell",
  },
  {
    id: 8,
    name: "Starlight",
  },
];
