import axios from 'axios';
import https from 'https';
import { NextRequest, NextResponse } from 'next/server';
import { commonHeaders, EXTERNAL_API_PATHS, REQ_GET } from '../constants';

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});
axios.defaults.httpsAgent = httpsAgent;

export async function GET(request: NextRequest) {
  let config = {
    method: REQ_GET,
    maxBodyLength: Infinity,
    headers: {
      ...commonHeaders,
      Authorization: 'Basic YWRtaW46YWRtaW4=', // TODO: have dynamic auth here
    },
  };

  try {
    const eventsResponse = await axios.request({
      ...config,
      url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/${EXTERNAL_API_PATHS.EVENTS}`,
    });
    const response = eventsResponse?.data?.list?.event ?? [];
    let events = Array.isArray(response) ? response : [response];

    events = events.map((event) => {
      return {
        ...event,
        eventTime: event?.eventTime?.time,
      };
    });

    return NextResponse.json({ events });
  } catch (error) {
    console.error('Error during API calls:', error);
    return NextResponse.error();
  }
}
