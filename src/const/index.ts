
export const PROPAGANDA_CHECKER_BG_CONTEXT_AI_TEXT_PROMPT = `Анализирай следния текст за наличие на пропаганда, дезинформация или подвеждащо съдържание. 
        Оцени достоверността на информацията, като посочиш конкретни примери и обясниш защо определени части могат да бъдат подвеждащи.
        
        Моля, обърни внимание на:
        1. Емоционално натоварен език
        2. Липса на източници или съмнителни източници
        3. Логически грешки или манипулативни аргументи
        4. Изопачени факти или статистики
        5. Конспиративни теории
        
        Текст за анализ:`;

export const PROPAGANDA_CHECKER_BG_TELL_ME_AI_TEXT_PROMPT = `Моля, предостави структуриран анализ във формат:
        {
            "truthScore": число от 0 до 100,
            "propagandaScore": число от 0 до 100,
            "analysis": подробен анализ,
            "warningFlags": списък с конкретни примери на проблемно съдържание,
            "recommendations": препоръки за проверка на фактите
        }`;

export const PROPAGANDA_CHECKER_BG_SYSTEM_AI_PROMPT = `Ти си експерт по проверка на факти и анализ на дезинформация. Твоята роля е да анализираш текст за наличие на пропаганда и подвеждащо съдържание, като предоставяш обективна и подробна оценка.`;

export const PROPAGANDA_CHECKER_EN_CONTEXT_AI_TEXT_PROMPT = `Evaluate the credibility of the information by providing specific examples and explaining why certain parts may be misleading.

        Please pay attention to:

        1.Emotionally charged language
        2.Lack of sources or questionable sources
        3.Logical fallacies or manipulative arguments
        4.Distorted facts or statistics
        5.Conspiracy theories

        Text for analysis:`;

export const PROPAGANDA_CHECKER_EN_TELL_ME_AI_TEXT_PROMPT = `Please provide a structured analysis in the following format:
        {
            "truthScore": number from 0 to 100,
            "propagandaScore": number from 0 to 100,
            "analysis": detailed analysis,
            "warningFlags": list of specific examples of problematic content,
            "recommendations": recommendations for fact-checking
        }`;

export const PROPAGANDA_CHECKER_EN_SYSTEM_AI_PROMPT = `You are an expert in fact-checking and misinformation analysis. Your role is to analyze text for the presence of propaganda and misleading content, providing an objective and detailed assessment.`;

export const FACT_CHECK_BG_SYSTEM_AI_PROMPT = `Ти е експерт във фактовото проверка и предоставя точна информация.`;
export const FACT_CHECK_BG_USER_AI_PROMPT = `Моля, анализирайте следното твърдение и ми кажете дали е вярно или невярно:`;

export const FACT_CHECK_EN_SYSTEM_AI_PROMPT = `You are an expert in fact-checking and providing accurate information.`;
export const FACT_CHECK_EN_USER_AI_PROMPT = `Please analyze the following statement and tell me whether it is true or false:`;
