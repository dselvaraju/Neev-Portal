import { NextRequest, NextResponse } from 'next/server';
import { eventsList } from './demoData/events';

export async function GET(request: NextRequest) {
  const response = eventsList?.list?.event ?? [];
  const events = Array.isArray(response) ? response : [response];

  const eventsResponse = events.map((event) => {
    return {
      ...event,
      eventTime: event?.eventTime?.time,
    };
  });

  return NextResponse.json({ events: eventsResponse });
}
