import { OpenAI } from 'openai';
import { 
    FACT_CHECK_EN_SYSTEM_AI_PROMPT, 
    FACT_CHECK_EN_USER_AI_PROMPT, 
    PROPAGANDA_CHECKER_EN_CONTEXT_AI_TEXT_PROMPT, 
    PROPAGANDA_CHECKER_EN_SYSTEM_AI_PROMPT,
    PROPAGANDA_CHECKER_EN_TELL_ME_AI_TEXT_PROMPT,
} from '@/const';

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_SECRET_KEY,
});

export const factCheckWithOpenAI = async (text: string) => {
  try {
    const response: any = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: FACT_CHECK_EN_SYSTEM_AI_PROMPT },
        { role: 'user', content: `${FACT_CHECK_EN_USER_AI_PROMPT} ${text}` },
      ],
    });

    return response?.choices[0]?.message.content.trim();
  } catch (error) {
    console.error('Error with OpenAI API:', error);
    return 'Error during fact-checking process';
  }
};

export const propagandaCheckerOpenAI = async (content: string) => {
    try {

        const prompt = `${PROPAGANDA_CHECKER_EN_CONTEXT_AI_TEXT_PROMPT} ${content} ${PROPAGANDA_CHECKER_EN_TELL_ME_AI_TEXT_PROMPT}`;

      const completion = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
            {
              role: "system",
              content: PROPAGANDA_CHECKER_EN_SYSTEM_AI_PROMPT
            },
            {
              role: "user",
              content: prompt
            }
          ],
          temperature: 0.5,
          max_tokens: 1000,
          presence_penalty: 0.6,
          frequency_penalty: 0.6,
 
      });
  
      const result: any = completion.choices[0].message.content;
      return JSON.parse(result);
    } catch (error) {
      console.error('Error with OpenAI API:', error);
      return 'Error during fact-checking process';
    }
  };
