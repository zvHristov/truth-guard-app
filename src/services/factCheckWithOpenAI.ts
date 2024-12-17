import { OpenAI } from 'openai';

const BG_CONTEXT_AI_TEXT_PROMPT = `Анализирай следния текст за наличие на пропаганда, дезинформация или подвеждащо съдържание. 
        Оцени достоверността на информацията, като посочиш конкретни примери и обясниш защо определени части могат да бъдат подвеждащи.
        
        Моля, обърни внимание на:
        1. Емоционално натоварен език
        2. Липса на източници или съмнителни източници
        3. Логически грешки или манипулативни аргументи
        4. Изопачени факти или статистики
        5. Конспиративни теории
        
        Текст за анализ:`;

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

export const propagandaCheckerOpenAI = async (content: string) => {
    try {

        const prompt = `${BG_CONTEXT_AI_TEXT_PROMPT} ${content}
        
        Моля, предостави структуриран анализ във формат:
        {
          "truthScore": число от 0 до 100,
          "propagandaScore": число от 0 до 100,
          "analysis": подробен анализ,
          "warningFlags": списък с конкретни примери на проблемно съдържание,
          "recommendations": препоръки за проверка на фактите
        }`;

      const completion = await openai.chat.completions.create({
        model: 'gpt-4o-mini',  // или 'gpt-3.5-turbo'
        messages: [
            {
              role: "system",
              content: "Ти си експерт по проверка на факти и анализ на дезинформация. Твоята роля е да анализираш текст за наличие на пропаганда и подвеждащо съдържание, като предоставяш обективна и подробна оценка."
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
