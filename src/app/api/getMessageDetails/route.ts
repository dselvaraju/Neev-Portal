import axios from 'axios';
import https from 'https';
import { NextRequest, NextResponse } from 'next/server';
import { commonHeaders, EXTERNAL_API_PATHS, REQ_GET } from '../constants';

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});
axios.defaults.httpsAgent = httpsAgent;

export async function POST(request: NextRequest) {
  const data = await request.json();
  const { channelId, messageId } = data;

  let config = {
    method: REQ_GET,
    maxBodyLength: Infinity,
    headers: {
      ...commonHeaders,
      Authorization: 'Basic YWRtaW46YWRtaW4=', // TODO: have dynamic auth here
    },
  };

  const messageResponse = await axios.request({
    ...config,
    url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/${EXTERNAL_API_PATHS.CHANNELS}/${channelId}/messages/${messageId}`,
  });
  const message = messageResponse?.data?.message ?? {};

  return NextResponse.json({ message });
}
