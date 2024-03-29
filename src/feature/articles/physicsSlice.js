import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const fetchUrlAsync = createAsyncThunk(
  "physics/fetchUrl",
  async (url) => {
    try {
      let corsurl = `https://cors-anywhere.herokuapp.com/`;
      let response = await fetch(corsurl + url);
      const responseText = await response.text();
      let parser = new DOMParser();
      let linksDoc = parser.parseFromString(responseText, "text/html");
      let linkElemArr = [];
      for (let index = 0; index < 5; index++) {
        linkElemArr.push(
          await linksDoc.querySelector(
            `  body > main > div > div.first-page-content > div > div.col-7.col-lg-6.pr-3 > div:nth-child(4) > div > div > article:nth-child(${
              index + 1
            }) > div.d-flex > div > h3 > a
          `
          )
        );
      }
      let linkUrlArr = linkElemArr.map((linkElem) => {
        let linkPath = linkElem.getAttribute("href");
        let linkUrl = corsurl + linkPath;
        return linkUrl;
      });
      return linkUrlArr;
    } catch (e) {
      console.log(e);
    }
  }
);

export const physicsSlice = createSlice({
  name: "physics",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUrlAsync.pending]: () => {
    },
    [fetchUrlAsync.fulfilled]: (state, action) => {
      return action.payload;
    },
   
  },
});

export const selectPhysics = (state) => state.physics;
export default physicsSlice.reducer;
