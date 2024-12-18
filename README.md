This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# Fact-Check AI
**Fact-Check AI** is a web application that allows users to analyze articles and news for fact-checking by using powerful AI models to validate the accuracy of the content. The project uses **OpenAI** for fact-checking, **Next.js** for server-side and client-side application, and **Axios** and **Cheerio** for scraping web content.


## Key Features
- **AI Fact-Checking**: Utilizes **OpenAI GPT-4** for fact-checking and validating the article's content or text.
- **Content Analysis**: Extracts article content from a URL using Cheerio and Axios.
- **Easy Expansion**: The project's structure is designed to be easily extensible with new text analysis and fake news detection features.
- **Multilingual Support**: The application supports English and Bulgarian languages.
- **Propaganda Detection**: Detects and analyzes propaganda content in the article.

## Technologies

- **Next.js**: A React framework for building server-side rendered applications.
- **Axios**: A promise-based HTTP client for making requests to fetch content from web pages.
- **OpenAI**: A powerful AI platform that provides access to a wide range of natural language processing models.
- **Cheerio**: A fast, flexible, and lean library for parsing and manipulating HTML and XML documents.


## How to Run the Project Locally

1. Clone the repository:
```bash
   git clone https://github.com/zvHristov/truth-guard-app.git
   cd truth-guard-app
   ```
2. Install dependencies:
```bash
   pnpm install
   ```
3. git switch to dev branch
```bash
    git switch dev
```
4. Add your OpenAI API key to the .env file
```bash
    NEXT_PUBLIC_OPENAI_SECRET_KEY=your-openai-api-key
```
4. Run the development server:
```bash
   pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


#How It Works

    Enter the URL of an article or news that you want to verify.
    The application will extract the content of the page, including the title and the main text.
    It will then analyze the content and validate whether the information is true or not.
    The analysis results, including whether the content is accurate or not, will be returned to the user.


You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### Explanation of Structure:
1. **Title and Overview**: The project is introduced with a clear description of what it does.
2. **Key Features**: The main features of the application are highlighted here.
3. **Technologies**: The tech stack is listed so users can understand what tools are used.
4. **How to Run**: Step-by-step instructions for setting up and running the project locally.
5. **How It Works**: A detailed description of the application's functionality from the user's perspective.
6. **Project Structure**: Overview of the project’s file structure and its key components.
7. **Adding New Features**: Guidance on how to extend the project with new features.
8. **Running Tests**: Instructions for running tests and ensuring code quality.
9. **License & Issues**: Information on licensing and contributing to the project.

This structure is clear, organized, and easy to follow, providing all the necessary details for someone who wants to understand, contribute, or use your project.