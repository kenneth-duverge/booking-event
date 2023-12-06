import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { event } = await request.json();

  console.log(event);

  return NextResponse.json({ message: 'We made it' }, { status: 200 });
}
