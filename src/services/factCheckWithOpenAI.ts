import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_SECRET_KEY,
//   baseUrl: 'https://api.openai.com/v1',
});

export const factCheckWithOpenAI = async (text: string) => {
  try {
    const response: any = await openai.chat.completions.create({
      model: 'gpt-4o-mini',  // или 'gpt-3.5-turbo'
      messages: [
        { role: 'system', content: 'You are an expert in fact-checking and providing accurate information.' },
        { role: 'user', content: `Please analyze the following statement and tell me whether it's true or false: ${text}` },
      ],
    });

    return response?.choices[0]?.message.content.trim();
  } catch (error) {
    console.error('Error with OpenAI API:', error);
    return 'Error during fact-checking process';
  }
};
