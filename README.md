<h1 align="center"> AI Article Summarizer ✨</h1>
<p align="center">
<img src="https://socialify.git.ci/kapilsinghnegi/aisummarizer/image?description=1&forks=1&language=1&logo=https%3A%2F%2Fai-summarizer-ksn.vercel.app%2Fassets%2Flogo-BKw9LvFT.svg&name=1&owner=1&pattern=Charlie+Brown&stargazers=1&theme=Auto" alt="aisummarizer" width="1280" height="320" />
</p>
<p>
  <strong>Summarize articles instantly using AI.</strong><br/>
  An open-source web app that converts long articles into clear, concise summaries using modern AI — with multi-language support and history tracking.
</p>

<p align="center">
  🔗 <a href="https://ai-summarizer-ksn.vercel.app/" target="_blank"><strong>Live Demo</strong></a>
</p>

---

## 🚀 About the Project

**AI Article Summarizer** is a web application that helps users quickly understand long-form articles by generating concise summaries from just a URL.

The app uses an AI-powered article extraction and summarization API to identify key points and present them in an easy-to-read format. It also stores previously summarized articles locally so users can revisit them anytime.

### ✨ Key Features

- 🔗 Summarize articles using just a URL  
- 🌍 Multi-language summaries (15+ languages)  
- ⚡ Fast and responsive UI  
- 📚 Summary history using local storage  
- 📋 One-click copy for summaries and links  
- 🧠 Intelligent error handling & loading states  
- 📱 Fully responsive (mobile & desktop)  

---

## 🛠️ Tech Stack

- **Vite** – Fast build tool  
- **React + TypeScript** – Modern UI with strong typing  
- **Redux Toolkit & RTK Query** – State management & API handling  
- **Tailwind CSS** – Utility-first styling  
- **RapidAPI** – Article extraction & summarization  
- **Vercel** – Deployment  

---

## ⚙️ Installation & Local Development

Follow these steps to run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/kapilsinghnegi/summarizer.git
cd summarizer
```

### 2. Set Up Environment Variables

a. Go to [RapidAPI Article Extractor and Summarizer](https://rapidapi.com/restyler/api/article-extractor-and-summarizer/)
b. Copy your API key
c. Create a .env file in the project root and add:

```bash
VITE_RAPID_API_ARTICLE_KEY=your_rapidapi_key_here
VITE_BASE_URL=article-extractor-and-summarizer.p.rapidapi.com
```

⚠️ Make sure .env is listed in .gitignore

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

The app will run at:

```arduino
http://localhost:5173
```

### Production build

```bash
npm run build
```

### TypeScript Check

To ensure full type safety:

```bash
npx tsc --noEmit
```

## ⭐ If you like this project
Give it a ⭐ on GitHub — it really helps!
