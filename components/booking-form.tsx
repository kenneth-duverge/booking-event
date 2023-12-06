'use client';
import { useRef, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useFormState } from 'react-dom';
import { createTodo } from '@/app/actions';

const initialState = { message: '' };

export const BookingForm = () => {
  const [state, formAction] = useFormState(createTodo, initialState);
  const formRef = useRef<HTMLFormElement | null>(null);

  return (
    <form
      ref={formRef}
      className="flex flex-col flex-1 mt-10 p-8 gap-6 mx-auto h-full"
      action={formAction}
    >
      <Label>
        <span className="text-base text-slate-500 mb-2 inline-block">give it a fun name</span>
        <Input type="text" name="event-name" placeholder="Sip & Stroke Soiree" />
      </Label>
      <fieldset className="flex gap-4 items-end">
        <Label className="w-full">
          <span className="text-base text-slate-500 mb-2 inline-block">when&apos;s the event?</span>
          <Input type="datetime-local" name="event-date" required />
        </Label>
        <Label className="w-full">
          <span className="text-base text-slate-500 mb-2 inline-block">price</span>
          <Input name="event-price" type="number" placeholder="$25.00" />
        </Label>
      </fieldset>
      <Textarea name="event-details" placeholder="More details about the event" />
      <Button type="submit">Create event</Button>
    </form>
  );
};
