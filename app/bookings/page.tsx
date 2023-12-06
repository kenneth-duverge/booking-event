import { EventTable } from '@/components/event-table';

export default function Bookings() {
  return (
    <>
      <h1 className="text-4xl font-bold flex gap-4 items-center">bookings</h1>
      <div className="pt-10">
        <EventTable />
      </div>
    </>
  );
}
