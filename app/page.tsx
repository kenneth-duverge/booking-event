import Image from 'next/image';

import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Flex } from '@radix-ui/themes';

import featuredImage1 from '@/public/featured-event-1.jpg';
import featuredImage2 from '@/public/featured-event-2.jpg';

export default async function Home() {
  return (
    <div className="flex flex-[2] flex-col gap-4 h-full w-full font-mono">
      <h1 className="text-4xl font-bold flex gap-4 items-center">find an event</h1>
      <Flex className="w-full" direction="column">
        <div className="w-full py-8 gap-4 flex">
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
          <Input className="h-12 w-[500px]" placeholder="Search an event" />
        </div>

        <section className="flex-1 bg-white rounded-md p-2 flex gap-5 w-full">
          <div className="border rounded-md flex-1 h-[400px] bg-stone-100 overflow-hidden relative">
            <div className="text-white absolute inset-0 flex flex-col gap-2 justify-end items-end bg-gradient-to-br from-transparent to-slate-800 p-4">
              <h1 className="text-xl font-semibold">Intro to community building</h1>
              <p>Lorem ipsum</p>
            </div>
            <Image src={featuredImage1} alt="" className="object-cover h-full" height={400} width={600} placeholder="blur" />
          </div>
          <div className="border rounded-md flex-1 h-[400px] overflow-hidden relative">
            <div className="text-white absolute inset-0 flex flex-col gap-2 justify-end items-end bg-gradient-to-br from-transparent to-slate-800 p-4">
              <h1 className="text-xl font-semibold">Sip & Stroke Soiree</h1>
              <p>Lorem ipsum</p>
            </div>
            <Image src={featuredImage2} alt="" className="object-cover h-full" height={400} width={600} placeholder="blur" />
          </div>
        </section>
      </Flex>
    </div>
  );
}
