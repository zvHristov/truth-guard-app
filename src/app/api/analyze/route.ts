import { NextRequest, NextResponse } from 'next/server';
import { fetchContent, ArticleContentI } from '@/services/fetchContent';
import { analyzeContent, AnalysisResultI } from '@/services/analyzeContent';
import { factCheckWithOpenAI } from '@/services/factCheckWithOpenAI';
import { stripHtmlTags } from '@/helpers';
export interface ResponsePageI {
  title: string;
  analysis: AnalysisResultI;
  factCheckResult: string;
}

export async function POST(req: NextRequest) {

  try {
    const body = await req.json();
    const { url } = body;

    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    const { title, content }: ArticleContentI = await fetchContent(url);
    const analysis: AnalysisResultI = analyzeContent(content);
    const factCheckResult: string = await factCheckWithOpenAI(stripHtmlTags(content));

    const response: ResponsePageI = { title, analysis, factCheckResult };
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
