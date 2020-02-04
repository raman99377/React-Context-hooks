import React from "react";

const article = ({ article }) => (
  <div className="article">
    <h2>{article.title}</h2>
    <p>{article.body}</p>
  </div>
);

export default article;
