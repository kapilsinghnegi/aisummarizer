import { MdLink } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import type { Article } from "../types";

interface SearchFormProps {
  article: Article;
  setArticle: React.Dispatch<React.SetStateAction<Article>>;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const SearchForm = ({ article, setArticle, onSubmit }: SearchFormProps) => (
  <form
    className="relative flex items-center"
    onSubmit={onSubmit}
    aria-label="Article URL form"
  >
    <MdLink aria-hidden="true" className="absolute w-5 left-3" size={24} />
    <label htmlFor="article-url" className="sr-only">
      Article URL
    </label>

    <input
      id="article-url"
      type="url"
      required
      placeholder="Paste the article link"
      value={article.url}
      onChange={e => setArticle(prev => ({ ...prev, url: e.target.value }))}
      className="url_input peer"
    />

    <button type="submit" className="submit_btn" aria-label="Summarize article">
      <BsArrowRight />
    </button>
  </form>
);

export default SearchForm;
