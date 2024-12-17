'use client';
import React, { useState } from 'react';

import UrlInput from '@/components/UrlInput';
import { ApiResponseI } from '@/components/InfoPage';
import InfoPage from '@/components/InfoPage';
import PropagandaChecker from '@/components/PropagandaChecker';

export function HomeComponent() {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState<null | ApiResponseI>(null);
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

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Failed to analyze URL');
      }

      const data: ApiResponseI = await res.json();
      setResult(data);
    } catch (err) {
      setError((err as Error).message);
    }
  };
  return (
    <div className="container mx-auto flex">
        <section className="w-1/2 mx-auto p-4">
        <h2 className="text-3xl font-bold mb-4">Url Analyzer</h2>
          <UrlInput onAnalyze={analyzeUrl} />
          {result && (<InfoPage {...result} />)}
        </section>
       <section className="w-1/2  mx-auto p-4">
       <h2 className="text-3xl font-bold mb-4">Text Analyzer</h2>
        <PropagandaChecker />
       </section>
    </div>
  )
}