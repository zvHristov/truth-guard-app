import axios from 'axios';
import * as cheerio from 'cheerio';
import { stripHtmlTags } from '@/helpers';
export interface ArticleContentI {
  title: string;
  content: string;
}
/**
 * A function that fetches the content of a web page.
 * @param url string The URL of the web page.
 * @returns object The content of the web page.
 */

export const fetchContent = async (url: string): Promise<ArticleContentI> => {
    try {
      const { data: html } = await axios.get(url);
      const $ = cheerio.load(html);
      const title = $('title').text();
      const content = $('body').text();
      return { title, content };
    } catch (error) {
      console.error('Error fetching content:', error);
      throw new Error('Unable to fetch article content.');
    }
  };