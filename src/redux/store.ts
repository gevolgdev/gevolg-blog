import { configureStore } from "@reduxjs/toolkit";
import sliceArticle from './sliceArticles';


const store = configureStore({
  reducer: {
    article: sliceArticle
  }
});

export default store;