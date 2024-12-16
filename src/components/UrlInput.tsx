import React, { useState } from 'react';

interface UrlInputProps {
  onAnalyze: (url: string) => Promise<void>;
}

const UrlInput: React.FC<UrlInputProps> = ({ onAnalyze }) => {
  const [url, setUrl] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleAnalyze = async () => {
    if (!url) {
      setError('URL is required');
      return;
    }

    setLoading(true);
    setError('');
    try {
      await onAnalyze(url);
    } catch (err) {
      setError('Failed to analyze the URL');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='form-control '>
      <input
        type="text"
        placeholder="Enter URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className='input with-base-style with-placeholder'
      />
      <button className='btn ml-4' onClick={handleAnalyze} disabled={loading}>
        {loading ? 'Analyzing...' : 'Analyze'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default UrlInput;