import Image from 'next/image';

import { Flex } from '@radix-ui/themes';

import featuredImage1 from '@/public/featured-event-1.jpg';
import featuredImage2 from '@/public/featured-event-2.jpg';

export default async function Home() {
  return (
    <div className="flex hide-scrollbar flex-[2] flex-col gap-4 h-full w-full font-mono overflow-auto">
      <h1 className="text-4xl font-bold">find an event</h1>
      <p className="text-slate-600 text-lg">Here are featured events happening in your area</p>
      <Flex className="w-full gap-4 mt-8" direction="column">
        <div className="flex-1 h-full overflow-auto bg-white rounded-md p-2 flex gap-5 w-full">
          <div className="border rounded-md flex-1 h-[400px] bg-stone-100 overflow-hidden relative">
            <div className="text-white absolute inset-0 flex flex-col gap-2 justify-end items-end bg-gradient-to-br from-transparent to-slate-800 p-4">
              <p className="text-xl font-semibold">Intro to community building</p>
              <p>Lorem ipsum</p>
            </div>
            <Image
              src={featuredImage1}
              alt=""
              className="object-cover h-full"
              height={400}
              width={600}
              placeholder="blur"
            />
          </div>
          <div className="border rounded-md flex-1 h-[400px] overflow-hidden relative">
            <div className="text-white absolute inset-0 flex flex-col gap-2 justify-end items-end bg-gradient-to-br from-transparent to-slate-800 p-4">
              <h1 className="text-xl font-semibold">Sip & Stroke Soiree</h1>
              <p>Lorem ipsum</p>
            </div>
            <Image
              src={featuredImage2}
              alt=""
              className="object-cover h-full"
              height={400}
              width={600}
              placeholder="blur"
            />
          </div>
        </div>
        <div className="flex justify-center items-center w-full h-[200px] rounded-lg bg-slate-100">
          <h1 className="text-lg text-center font-semibold max-w-[60%]">
            Discover a world of local excitement! Explore a variety of events in your area by
            category and never miss out on the vibrant happenings around you. Check out more below!
          </h1>
        </div>
        <Section title="Arts" />
        <Section title="Music" />
        <Section title="Learning" />
      </Flex>
    </div>
  );
}

const Section = ({ title }: { title: string }) => {
  return (
    <div className="py-4 flex flex-col gap-2">
      <h2 className="text-3xl font-bold">{title}</h2>
      <div className="flex gap-2">
        {Array.from({ length: 3 })
          .fill(null)
          .map((d, i) => (
            <Image
              className="rounded-md"
              width={400}
              height={300}
              key={i}
              src="https://random.imagecdn.app/400/301"
              alt=""
            />
          ))}
      </div>
    </div>
  );
};
