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
    const usersResponse = await axios.request({
      ...config,
      url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/${EXTERNAL_API_PATHS.USERS}`,
    });
    const response = usersResponse?.data?.list?.user ?? [];
    let users = Array.isArray(response) ? response : [response];

    users = users.map((user) => {
      return {
        ...user,
        lastLogin: user?.lastLogin?.time,
      };
    });

    return NextResponse.json({ users });
  } catch (error) {
    console.error('Error during API calls:', error);
    return NextResponse.error();
  }
}
