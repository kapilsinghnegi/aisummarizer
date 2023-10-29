import React, { useState, useEffect } from "react";
import { copy, linkIcon, loader, tick } from "../assets";

import {useLazyGetSummaryQuery} from '../services/article';


const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });
  
  const [allArticles, setAllArticles] = useState([]);
  const [copied, setCopied] = useState("");
  const [language, setLanguage] = useState('en')

  //RTK Lazy Query
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  //Load data from local storage
  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem('articles')
    );

    if(articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data } = await getSummary({ articleUrl: article.url, language: language, });
    if(data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      const updatedAllArticles = [newArticle, ...allArticles];
      
      //Update state and Local Storage
      setArticle(newArticle);
      setAllArticles(updatedAllArticles);
      localStorage.setItem("articles", JSON.stringify(updatedAllArticles));
    }
  };

  const handleCopy = (copyURL) => {
    setCopied(copyURL);
    navigator.clipboard.writeText(copyURL);
    setTimeout(() => setCopied(false), 2000);
  }
    
  return (
    <section className='mt-16 w-full max-w-xl'>
      {/* {Search} */}
      <div className='flex flex-col w-full gap-2'>
        <form 
          className='relative flex justify-center items-center' 
          onSubmit={handleSubmit}
        >
         <img
          src={linkIcon}
          alt='link icon'
          className='absolute left-0 my-2 ml-3 w-5'
         />

         <input type='url'
         placeholder='Paste the article link'
         value={article.url}
         onChange={(e) => setArticle({ ...article, url: e.target.value })}
         required
         className='url_input peer'
          />
          <button
          type='submit'
          className='submit_btn
           peer-focus:border-gray-700
            peer-focus:text-gray-700 '
          >
           <p>↵</p>
          </button>
        </form>
        <section className='w-full max-w-xl'>
          <div className= 'flex justify-end items-center' >
            <p className= 'font-semibold'>Select Language: </p>
            <div className='flex-row w-1/4 h-10 ml-2 mt-1 mb-1'>
              <select
                id="countries"
                className="lang_input p-2.5"
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option value="en">English</option>
                <option disabled>
                  ────────────
                </option>
                <option value="ar">Arabic</option>
                <option value="ca">Catalan</option>
                <option value="zh">Chinese</option>
                <option value="de">Deutsch</option>
                <option value="es">Espa&#241;ol</option>
                <option value="fr">Fran&#231;ais</option>
                <option value="el">Greek</option>
                <option value="he">Hebrew</option>
                <option value="hi">Hindi</option>
                <option value="it">Italian</option>
                <option value="ja">Japanese</option>
                <option value="pt">Portugu&#234;s</option>
                <option value="ru">Russian</option>
                <option value="uk">Ukranian</option>
              </select>
            </div>
          </div>
        </section>

        {/* { Browse URL History} */}
        <div className='flex flex-col gap-1 max-h-60 overflow-y-auto'>
          { allArticles.map((item, index) => (
              <div
                key={`link-${index}`}
                onClick={() => setArticle(item)}
                className='link_card'
              >
                <div className='copy-btn' onClick={() => handleCopy(item.url)}>
                  <img 
                    src={copied === item.url ? tick : copy}
                    alt="copy-icon"
                    className='w-max h-max object-contain'
                  />
                </div>
                <p className='flex-1 font-satoshi text-blue-700 font-medium text-sm truncate'>
                  {item.url}
                </p>
              </div>
            ))}
        </div>
      </div>

       {/* Display Results */}
       <div className="my-10 max-w-full flex justify-center items-center">
        {isFetching ? (
          <img src={loader} alt='loader' className='w-20 h-20 object-contain' />
        ) : error ? (
          <p className='font-inter font-bold text-black text-center'>
            Well, that wasn't supposed to happen...
            <br />
            <span className='font-satoshi font-normal text-gray-700'>
              {error?.data?.error}
            </span>
          </p>
          ) : (
            article.summary && (
              <div className="flex flex-col gap-3">
                <h2 className="font-satoshi font-bold text-gray-600 text-xl">
                  Article <span className="blue_gradient">Summary</span>
                </h2>
                <div className="summary_box">
                  <p className="font-inter font-medium text-gray-700 text-sm">
                    {article.summary}
                  </p>
                </div>
              </div>
            )
          )}
       </div>
    </section>
  )
}

export default Demo