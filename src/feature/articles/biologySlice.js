import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const fetchUrlAsync = createAsyncThunk(
  "biology/fetchUrl",
  async (url) => {
    try {
      let corsurl = `https://cors-anywhere.herokuapp.com/`;
      let response = await fetch(corsurl + url);
      const responseText = await response.text();
      let parser = new DOMParser();
      let linksDoc = parser.parseFromString(responseText, "text/html");
      //console.log(linksDoc);
      let linkElemArr = [];
      for (let index = 0; index < 5; index++) { //10
        linkElemArr.push(
          await linksDoc.querySelector(` #featured_tab_${index + 1} > h3 > a`)
        );
      }
      //console.log(linkElemArr);
      let linkUrlArr = linkElemArr.map((linkElem) => {
        let linkPath = linkElem.getAttribute("href");
        let linkUrl = corsurl + `https://www.sciencedaily.com${linkPath}`;
        return linkUrl;
      });
      //console.log(linkUrlArr);
      return linkUrlArr;
    } catch (e) {
      console.log(e);
    }
  }
);

export const biologySlice = createSlice({
  name: "biology",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUrlAsync.pending]: () => {
      //console.log("pending");
    },
    [fetchUrlAsync.fulfilled]: (state, action) => {
      //console.log(`fulfilled: ${action.payload}`);
      return action.payload;
    },
  },
});


export const selectBiology = (state) => state.biology;
export default biologySlice.reducer;
