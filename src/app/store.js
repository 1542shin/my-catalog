import { configureStore } from '@reduxjs/toolkit';
import buddhismReducer from '../feature/articles/buddhismSlice.js'
import postReducer from '../feature/postSlice.js'
import aiReducer from '../feature/articles/aiSlice.js'
import biologyReducer from '../feature/articles/biologySlice.js'
import physicsReducer from '../feature/articles/physicsSlice.js'
export const store = configureStore({
  reducer: {
    buddhism: buddhismReducer,
    post: postReducer,
    ai: aiReducer,
    biology: biologyReducer,
    physics: physicsReducer,
  },
});
