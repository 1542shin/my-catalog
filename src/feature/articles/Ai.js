import Post from "../Post";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUrlAsync } from "./aiSlice";
import { v4 as uuidv4 } from "uuid";
import { selectAi } from "./aiSlice";

export const Ai = () => {
  let aiUrl = "https://www.artificialintelligence-news.com/"; 
  const aiUrls = useSelector(selectAi);
  const dispatch = useDispatch();
  const titleQuery =
    "#techforge > div.off-canvas-wrapper.tf-full-screen > div > div:nth-child(3) > div > div > div > main > article > header > h1";
  const textQuery =
    "article.articles > section.entry-content > div > div.cell.small-12.medium-12.large-8";
  useEffect(() => {
    dispatch(fetchUrlAsync(aiUrl));
  }, []);

  return (
    <div className=" pl-0 lg:pl-28 pt-10 pb-72">
      {aiUrls.length > 0 &&
        aiUrls.map((url) => {
          const id = uuidv4();
          return (
            <Post
              id={id}
              key={id}
              url={url}
              titleQuery={titleQuery}
              textQuery={textQuery}
            />
          );
        })}
    </div>
  );
};
