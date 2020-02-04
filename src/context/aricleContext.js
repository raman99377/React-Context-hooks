import React, { createContext, useState, useReducer } from "react";
import { reducer } from "./reducer";
//To create a context
//you can pass as argument object, array, string, etc
export const ArticleContext = createContext();

const ArticleProvider = ({ children }) => {
  const [articles, dispatch] = useReducer(reducer, [
    { id: 1, title: "post 1", body: "Quisque cursus, metus vitae pharetra" },
    { id: 2, title: "post 2", body: "Quisque cursus, metus vitae pharetra" }
  ]);

  return (
    //Provider
    //Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes.
    <ArticleContext.Provider value={{ articles, dispatch }}>
      {children}
    </ArticleContext.Provider>
  );
};

export default ArticleProvider;
