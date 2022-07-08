import Post from "../Post";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUrlAsync } from "./biologySlice";
import { v4 as uuidv4 } from "uuid";
import { selectBiology } from "./biologySlice";

export const Biology = () => {
  let biologyUrl = "https://www.sciencedaily.com/news/plants_animals/biology/"; 
  const biologyUrls = useSelector(selectBiology);
  const dispatch = useDispatch();
  const titleQuery = "#headline";
  const textQuery = "#story_text";
  useEffect(() => {
    dispatch(fetchUrlAsync(biologyUrl));
  }, []);

  return (
    <div className="pl-0 lg:pl-28 pt-10 pb-72">
      {biologyUrls.length > 0 &&
        biologyUrls.map((url) => {
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
