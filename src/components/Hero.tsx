import { FaGithub } from "react-icons/fa";
import logo from "../assets/logo.svg";

const Hero = () => {
  return (
    <header className="flex flex-col items-center justify-center w-full">
      <nav
        className="flex items-center justify-between w-full pt-3 mb-10"
        aria-label="Primary navigation"
      >
        <div className="flex items-center justify-center">
          <img src={logo} alt="logo" className="object-contain w-12 sm:w-20" />
          <span className="text-lg font-bold leading-tight tracking-tighter sm:text-2xl">
            AI Article Summarizer
          </span>
        </div>
        <a
          href="https://github.com/kapilsinghnegi/summarizer"
          target="_blank"
          rel="noopener noreferrer"
          className="github_icon"
          aria-label="View source code on GitHub"
          title="View source on GitHub"
        >
          <FaGithub className="text-2xl sm:text-4xl" />
        </a>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Summarize, an open-source article summarizer
        that transforms lengthy articles into clear, concise summaries with the
        power of
        <span className="orange_gradient"> OpenAI GPT-4</span>
      </h2>
    </header>
  );
};

export default Hero;
