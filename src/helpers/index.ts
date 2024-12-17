
  /**
 * A function that removes HTML tags from a string.
 * @param html The content of the web page.
 * @returns returns text without html tags.
 */
export const stripHtmlTags = (html: string): string => html.replace(/<\/?[^>]+(>|$)/g, "").trim();
  