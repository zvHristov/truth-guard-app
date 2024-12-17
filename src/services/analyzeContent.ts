export interface AnalysisResultI {
    wordCount: number;
    containsClickbait: boolean;
  }

  /**
 * A function that analyzes the content of a web page.
 * @param text The content of the web page.
 * @returns returns analysis result.
 */
export const analyzeContent = (text: string): AnalysisResultI => {
    const clickbaitKeywords = ['shocking', 'unbelievable', 'amazing'];
    const containsClickbait = clickbaitKeywords.some((keyword) =>
      text.toLowerCase().includes(keyword),
    );
  
    return {
      wordCount: text.split(' ').length,
      containsClickbait,
    };
  };