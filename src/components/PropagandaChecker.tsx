import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { Loader2, AlertTriangle, Info } from 'lucide-react';

interface Recommendation {
  action: string;
  description: string;
}

interface WarningFlag {
  example: string;
  issue: string;
  explanation: string;
}

interface AnalysisResult {
  truthScore: number;
  propagandaScore: number;
  analysis: string;
  warningFlags: WarningFlag[];
  recommendations: Recommendation[];
}

export default function PropagandaChecker() {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const analyzeContent = async () => {
    if (!content.trim()) {
      setError('Please enter text');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/propagandaChecker', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content }),
      });

      if (!response.ok) throw new Error('Failed to analyze content');
      
      const data = await response.json();
      console.log(data, 'AI check text')
      setResult(data);
    } catch (err) {
      setError('Error analyze');
    } finally {
      setLoading(false);
    }
  };
console.log(result, '  data text')
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">{'Check fact'}</h2>
        <div className="space-y-4">
          <Textarea
            placeholder="Enter text..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={8}
            className="w-full text-area"
            color="#f5f5f5" 
            variant="soft"
          />
          <Button 
            onClick={analyzeContent}
            disabled={loading}
            className="w-full"
          >
            {loading ? (
              <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Analyzing...</>
            ) : (
              'Analyzing text'
            )}
          </Button>
        </div>
      </Card>

      {error && (
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {result && (
        <Card className="p-6 space-y-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Достоверност на съдържанието:</h3>
              <Progress value={result.truthScore} className="h-2" color="crimson" />
              <p className="text-sm text-gray-600 mt-1">{result.truthScore}% достоверност</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Ниво на пропаганда:</h3>
              <Progress 
                value={result.propagandaScore} 
                className="h-2" 
           
                color="crimson"
              />
              <p className="text-sm text-gray-600 mt-1">{result.propagandaScore}% пропагандно съдържание</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Подробен анализ:</h3>
              <p className="text-gray-700">{result.analysis}</p>
            </div>
            {result.warningFlags.length > 0 && (
              <div>
                <h3 className="font-semibold mb-2">Предупреждения:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {result.warningFlags.map((flag: any, index: number) => (
                    <li key={index} className="text-gray-700">
                        <p>{flag.example}</p>
                        <p>{flag.issue}</p>
                        <p>{flag.explanation}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-start gap-2">
                <Info className="h-5 w-5 text-blue-500 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-2">Препоръки за проверка:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                  {result.recommendations &&
                     result?.recommendations.map((rec, index) => (
                      <li key={index} className="text-gray-700">
                        <p>{rec.action}</p>
                        <p>{rec.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}