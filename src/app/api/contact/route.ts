import { NextResponse } from 'next/server';

import { contactFormSchema } from '@/lib/validation';

export async function POST(request: Request) {
  const json = await request.json();
  const parsed = contactFormSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json({ message: 'Invalid form submission.' }, { status: 400 });
  }

  return NextResponse.json({ message: 'Message received successfully.' }, { status: 200 });
}