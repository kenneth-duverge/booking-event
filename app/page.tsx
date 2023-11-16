import { BookingCalendar } from '@/components/ui/booking-calendar';
import { Grid } from '@radix-ui/themes';

export default function Home() {
  return (
    <div className="flex w-full justify-center p-20 h-full font-mono">
      <Grid columns="2" width="100%">
        <BookingCalendar />
        <section className="w-500px border h-full max-h-[700px] bg-white rounded-md p-8 flex flex-col gap-5">
          <h1 className="text-xl font-bold mb-2">here&apos;s what&apos;s happening</h1>
          <div className="bg-slate-200 w-full h-[300px] rounded-md"></div>
          <div className="flex flex-col gap-3 max-h-[350px] overflow-auto">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                className="flex flex-col gap-1 [&:not(:last-of-type)]:border-b pb-5 border-slate-200"
                key={i}
              >
                <h2 className="font-bold">
                  Art display in Bushwick
                  <span className="inline-block ml-2 text-md font-normal text-slate-600">by G</span>
                </h2>
                <p>{7 + i} p.m</p>
              </div>
            ))}
          </div>
        </section>
      </Grid>
    </div>
  );
}
