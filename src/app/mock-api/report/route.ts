import { NextRequest, NextResponse } from 'next/server';
import { reportList } from './demoData/report';

export async function GET(request: NextRequest) {
  const response = reportList?.list?.report ?? [];
  const report = Array.isArray(response) ? response : [response];

  return NextResponse.json({ report });
}
