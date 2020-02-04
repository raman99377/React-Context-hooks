import React from "react";
import ArticleProvider from "./context/aricleContext";
import Articles from "./container/Articles";
import AddArticle from "./container/AddArticle";
import "./styles.css";

export default function App() {
  return (
    //Here we wrap the components with the Provider
    <ArticleProvider>
      <Articles />
      <AddArticle />
    </ArticleProvider>
  );
}
