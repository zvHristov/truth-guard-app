"use client";
import React, { useState } from 'react';
import UrlInput from '@/components/UrlInput';
interface ApiResponse {
  title: string;
  analysis: {
    wordCount: number;
    containsClickbait: boolean;
  };
}

export default function Home() {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState<null | ApiResponse>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  

  const analyzeUrl = async (url: string) => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await fetch('/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });
console.log(res, 'response');
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Failed to analyze URL');
      }

      const data: ApiResponse = await res.json();
      setResult(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <h1>Article Truth Analyzer</h1>
      <UrlInput onAnalyze={analyzeUrl} />
      {result && (
        <div>
          <h2>Analysis Result</h2>
          <p>Title: {result.title}</p>
          <p>Contains Clickbait: {result.analysis.containsClickbait ? 'Yes' : 'No'}</p>
          <p>Word Count: {result.analysis.wordCount}</p>
        </div>
      )}
    </div>
  )
}
