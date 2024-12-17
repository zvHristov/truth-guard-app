'use client';
import React, { useState } from 'react';

import UrlInput from '@/components/UrlInput';
import { ApiResponseI } from '@/components/InfoPage';
import InfoPage from '@/components/InfoPage';

const HomePage = () => {
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
    <div>
        <UrlInput onAnalyze={analyzeUrl} />
        {result && (<InfoPage {...result} />)}
    </div>
  )
}

export default HomePage