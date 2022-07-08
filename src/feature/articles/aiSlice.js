import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const fetchUrlAsync = createAsyncThunk("ai/fetchUrl", async (url) => {
  try {
    let corsurl = `https://cors-anywhere.herokuapp.com/`;
    let response = await fetch(corsurl + url);
    const responseText = await response.text();
    let parser = new DOMParser();
    let linksDoc = parser.parseFromString(responseText, "text/html");
    let linkElemArr = [];
    for (let index = 0; index < 4; index++) {
      linkElemArr.push(
        await linksDoc.querySelector(
          `  #techforge > div.off-canvas-wrapper.tf-full-screen > div > div:nth-child(3) > div > section > div:nth-child(2) > div:nth-child(${
            index + 1
          }) > div > div.cell.small-3.medium-12.large-12 > a`
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
});

export const aiSlice = createSlice({
  name: "ai",
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

export const selectAi = (state) => state.ai;
export default aiSlice.reducer;
