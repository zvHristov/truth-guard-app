import axios from 'axios';
import * as cheerio from 'cheerio';

export interface ArticleContent {
  title: string;
  content: string;
}
/**
 * A function that fetches the content of a web page.
 * @param url string The URL of the web page.
 * @returns object The content of the web page.
 */

export const fetchContent = async (url: string): Promise<ArticleContent> => {
    try {
      const { data: html } = await axios.get(url);
      console.log(html, 'html ___fetchContent ');
      const $ = cheerio.load(html);
  
      const title = $('title').text();
      const content = $('body').text();
  
      return { title, content };
    } catch (error) {
      console.error('Error fetching content:', error);
      throw new Error('Unable to fetch article content.');
    }
  };