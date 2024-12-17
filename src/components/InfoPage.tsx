export interface ApiResponseI {
  title: string;
  analysis: {
    wordCount: number;
    containsClickbait: boolean;
  };
}

const InfoPage = (props: ApiResponseI) => {
  const { title, analysis } = props;

  return (
    <div>
    <h2>Analysis Result</h2>
    <p>Title: {title}</p>
    <p>Contains Clickbait: {analysis.containsClickbait ? 'Yes' : 'No'}</p>
    <p>Word Count: {analysis.wordCount}</p>
  </div>
  );
};

export default InfoPage;