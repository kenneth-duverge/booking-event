'use server';

import fs from 'fs/promises';
import { revalidatePath } from 'next/cache';

export async function createTodo(prevState: any, formData: FormData) {
  try {
    const { data } = JSON.parse(await fs.readFile('./public/data.json', 'utf-8'));

    const event = {
      id: data.length + 1,
      name: formData.get('event-name'),
      details: formData.get('event-details'),
      location: formData.get('event-location') ?? '',
      ticketPrice: formData.get('event-price'),
      eventDate: formData.get('event-date'),
      bookings: [''],
    };

    await fs.writeFile('./public/data.json', JSON.stringify({ data: [...data, event] }, null, 2));
    return revalidatePath('/');
  } catch (e) {
    return { message: 'Failed to create' };
  }
}
