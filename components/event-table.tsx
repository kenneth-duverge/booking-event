import fs from 'fs/promises';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

type Bookings = {
  id: number;
  name: string;
  location: string;
  eventDate: string;
  createdDate: string;
  bookings: any[];
}[];

export async function EventTable() {
  const { data } = JSON.parse(await fs.readFile('./public/data.json', { encoding: 'utf-8' })) as {
    data: Bookings;
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {Object.keys(data[0]).map((t) => (
            <TableHead key={t} className="w-[100px]">
              {t}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((d) => (
          <TableRow key={d.id}>
            <TableCell className="font-medium">{d.id}</TableCell>
            <TableCell>{d.name}</TableCell>
            <TableCell>{d.bookings}</TableCell>
            <TableCell>{d.location}</TableCell>
            <TableCell>{d.createdDate}</TableCell>
            <TableCell>{d.eventDate}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
