import { NextRequest, NextResponse } from 'next/server';
import { usersList } from './demoData/users';

export async function GET(request: NextRequest) {
  const response = usersList?.list?.user ?? [];
  const users = Array.isArray(response) ? response : [response];

  users.forEach((user) => {
    user.lastLogin = user?.lastLogin?.time;
  });

  return NextResponse.json({ users });
}
