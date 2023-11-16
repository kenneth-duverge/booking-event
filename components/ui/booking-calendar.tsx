'use client';

import { useState } from 'react';
import { Calendar } from './calendar';

export const BookingCalendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      modifiers={{ booked: [new Date(2023, 10, 23), new Date(2023, 10, 24)] }}
      modifiersStyles={{ booked: { border: '1px solid black' } }}
      selected={date}
      onSelect={setDate}
      onDayClick={(day, m) => {
        if (m.booked) {
          console.log('This is booked!');
        }
      }}
      className="rounded-md border h-fit w-fit"
    />
  );
};
