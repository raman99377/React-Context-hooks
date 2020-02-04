import React, { useContext } from "react";
import { ArticleContext } from "../context/aricleContext";
import Article from "../components/Article";

const Articles = () => {
  // Consume the context
  const { articles } = useContext(ArticleContext);
  return (
    <div>
      {articles.map(article => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  );
};

export default Articles;
