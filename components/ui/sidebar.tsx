'use client';

import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from './label';
import { Checkbox } from './checkbox';

// const Link = ({ children, href }: React.PropsWithChildren<{ href: string }>) => {
//   const pathname = usePathname();
//   return (
//     <NextLink
//       href={href}
//       className={`p-2 hover:bg-slate-200/50 w-full flex items-center gap-4 hover:text-black transition-colors h-fit rounded-md ${
//         pathname === `${href.toLowerCase()}` ? 'bg-slate-200/50 text-black' : ''
//       }`}
//     >
//       {children}
//     </NextLink>
//   );
// };

export const Sidebar = () => {
  return (
    <div className="w-[250px] border-r-2 border-slate-200/90 py-2 px-4 flex flex-col gap-2 items-center">
      <div className="w-full py-8 gap-4 flex flex-col">
        <Label className="font-bold">Filter</Label>
        <Select>
          <SelectTrigger className="w-[200px] h-full">
            <SelectValue placeholder="Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="bushwick">Bushwick</SelectItem>
            <SelectItem value="flatbush">Flatbush</SelectItem>
            <SelectItem value="astoria">Astoria</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className='w-full flex flex-col gap-4'>
        {['Art', 'Music', 'Learning'].map((c) => (
          <Label className='flex gap-2' key={c}>
            <Checkbox />
            {c}
          </Label>
        ))}
      </div>
    </div>
  );
};
