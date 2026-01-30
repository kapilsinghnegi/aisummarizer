import { useState } from "react";
import toast from "react-hot-toast";
import { MdContentCopy, MdCheck } from "react-icons/md";
import type { Article } from "../types";

interface ArticleHistoryProps {
  articles: Article[];
  setArticle: React.Dispatch<React.SetStateAction<Article>>;
}

const ArticleHistory = ({ articles, setArticle }: ArticleHistoryProps) => {
  const [copied, setCopied] = useState<string>("");

  const handleCopy = (e: React.MouseEvent<HTMLButtonElement>, url: string) => {
    e.stopPropagation();
    navigator.clipboard.writeText(url);
    setCopied(url);
    toast.success("Link copied!");
    setTimeout(() => setCopied(""), 1500);
  };

  return (
    <div className="flex flex-col gap-1 mt-4 overflow-y-auto max-h-60">
      {articles.map(item => (
        <div
          key={item.url}
          onClick={() => setArticle(item)}
          className="flex items-center gap-2 text-left link_card"
          aria-label={`Load article ${item.url}`}
        >
          <button
            type="button"
            onClick={e => handleCopy(e, item.url)}
            className="shrink-0"
            aria-label="Copy article link"
          >
            {copied === item.url ? (
              <MdCheck aria-hidden="true" />
            ) : (
              <MdContentCopy aria-hidden="true" />
            )}
          </button>
          <span className="text-blue-700 truncate font-satoshi">
            {item.url}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ArticleHistory;
