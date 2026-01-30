import Hero from "./components/Hero";
import Demo from "./components/ArticleSummarizer";

import "./App.css";
import { Toaster } from "react-hot-toast";
import React from "react";

const App: React.FC = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>
      <div className="app">
        <Hero />
        <Demo />
      </div>
      <Toaster position="bottom-right" />
    </main>
  );
};

export default App;
