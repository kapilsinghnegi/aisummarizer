import { useState, useEffect, FormEvent } from "react";
import loader from "../assets/loader.svg";
import { useLazyGetSummaryQuery } from "../services/article";
import SearchForm from "./SearchForm";
import LanguageSelect from "./LanguageSelect";
import ArticleHistory from "./ArticleHistory";
import SummaryBox from "./SummaryBox";
import type { Article, LanguageCode } from "../types";

const ArticleSummarizer = () => {
  const [article, setArticle] = useState<Article>({ url: "", summary: "" });
  const [allArticles, setAllArticles] = useState<Article[]>([]);
  const [language, setLanguage] = useState<LanguageCode>("en");

  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  useEffect(() => {
    try {
      const stored = localStorage.getItem("articles");
      if (stored) setAllArticles(JSON.parse(stored));
    } catch {
      localStorage.removeItem("articles");
    }
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { data } = await getSummary({
      articleUrl: article.url,
      language,
    });

    if (!data?.summary) return;

    const newArticle: Article = { url: article.url, summary: data.summary };

    const updatedArticles: Article[] = [
      newArticle,
      ...allArticles.filter(a => a.url !== article.url),
    ];

    setArticle(newArticle);
    setAllArticles(updatedArticles);
    localStorage.setItem("articles", JSON.stringify(updatedArticles));
  };

  const errorMessage =
    error && "data" in error
      ? (error.data as { error?: string })?.error
      : "Something went wrong";

  return (
    <section className="w-full max-w-xl mt-16">
      <SearchForm
        article={article}
        setArticle={setArticle}
        onSubmit={handleSubmit}
      />
      <LanguageSelect language={language} setLanguage={setLanguage} />
      <ArticleHistory articles={allArticles} setArticle={setArticle} />

      <div className="flex justify-center my-10">
        {isFetching ? (
          <img src={loader} alt="Loading summary" className="w-20 h-20" />
        ) : error ? (
          <p role="alert" className="font-bold text-center">
            {errorMessage}
          </p>
        ) : (
          article.summary && <SummaryBox summary={article.summary} />
        )}
      </div>
    </section>
  );
};

export default ArticleSummarizer;
