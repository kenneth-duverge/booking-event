import { BookingForm } from '@/components/booking-form';
import Image from 'next/image';

import uploadIllustration from '@/public/upload.svg';

const Heading = () => (
  <h1 className="text-4xl font-bold flex gap-4 items-center">create an event</h1>
);

export default function Book() {
  return (
    <>
      <Heading />
      <div className="flex gap-4 pt-8 h-[700px]">
        <div className='border rounded-md flex-1 flex justify-center items-center'>
          <Image src={uploadIllustration} alt="Upload Illustration" width={200} height={100} />
        </div>
        <BookingForm />
      </div>
    </>
  );
}
