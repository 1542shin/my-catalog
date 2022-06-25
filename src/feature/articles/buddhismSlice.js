import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const fetchUrlAsync = createAsyncThunk(
  "buddhism/fetchUrl",
  async (url) => {
    try {
      let corsurl = `https://cors-anywhere.herokuapp.com/`;
      let response = await fetch(corsurl + url);
      const responseText = await response.text();
      let parser = new DOMParser();
      let linksDoc = parser.parseFromString(responseText, "text/html");
      //console.log(linksDoc);
      let linkElemArr = [];
      for (let index = 0; index < 2; index++) {
        linkElemArr.push(
          await linksDoc.querySelector(
            `body>div:nth-child(2)>div:nth-child(1)>section:nth-child(3)>div:nth-child(1)>div:nth-child(1)>div:nth-child(1)>div:nth-child(1)>div:nth-child(1)>div:nth-child(1)>div:nth-child(1)>div:nth-child(1)>article:nth-child(${index+1})>a:nth-child(1)`
            
          )
        );
      }
      //console.log(linkElemArr);
      let linkUrlArr = linkElemArr.map((linkElem) => {
        let linkPath = linkElem.getAttribute("href").split("?")[0];
        let linkUrl = corsurl + linkPath
        return linkUrl;
      });
      //console.log(linkUrlArr);
      return linkUrlArr;
    } catch (e) {
      console.log(e);
    }
  }
);

export const buddhismSlice = createSlice({
  name: "buddhism",
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

export const selectBuddhism = (state) => state.buddhism;

export default buddhismSlice.reducer;
