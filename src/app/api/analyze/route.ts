import { NextRequest, NextResponse } from 'next/server';
import { fetchContent, ArticleContent } from '@/services/fetchContent';
import { analyzeContent, AnalysisResult } from '@/services/analyzeContent';

export interface ApiResponse {
  title: string;
  analysis: AnalysisResult;
}

export async function POST(req: NextRequest) {
    console.log(req, 'req --______');
  try {
    const body = await req.json();
    const { url } = body;

    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    const { title, content }: ArticleContent = await fetchContent(url);
    const analysis: AnalysisResult = analyzeContent(content);

    const response: ApiResponse = { title, analysis };
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
