import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = null;

export const loadArticleAsync = createAsyncThunk(
  "post/loadArticle",
  async (url) => {
    try {
      let response = await fetch(url);
      const responseText = await response.text();
      let parser = new DOMParser();
      let articleDoc = parser.parseFromString(responseText, "text/html");
      const article = articleDoc.querySelector(
        "body > div.wrap.sub.intro.intro-news-view > section > div.wrap-content > div > div.wrap-post > div.post-view.post-markdown"
      );
      const articleString = article.outerHTML; 
      return articleString;
    } catch (e) {
      console.log(e);
    }
  }
);

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    [loadArticleAsync.pending]: () => {
    },
    [loadArticleAsync.fulfilled]: (state, action) => {
      return action.payload;
    },
  },
});

export const selectPost = (state) => state.post;

export default postSlice.reducer;
