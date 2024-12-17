export interface ApiResponseI {
  title: string;
  analysis: {
    wordCount: number;
    containsClickbait: boolean;
  };
  factCheckResult: string;
}

const InfoPage = (props: ApiResponseI) => {
  const { title, analysis, factCheckResult } = props;

  return (
    <div>
    <h2>Analysis Result</h2>
    <p>Title: {title}</p>
    <p>Contains Clickbait: {analysis.containsClickbait ? 'Yes' : 'No'}</p>
    <p>Word Count: {analysis.wordCount}</p>
    <p>Fact Check Result: {factCheckResult}</p>
  </div>
  );
};

export default InfoPage;