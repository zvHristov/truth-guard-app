import { NextResponse } from 'next/server';

import { propagandaCheckerOpenAI } from '@/services/factCheckWithOpenAI';

export async function POST(request: Request) {

  try {
    const { content } = await request.json();
    const result = await propagandaCheckerOpenAI(content);
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
