import Post from "../Post";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUrlAsync } from "./physicsSlice";
import { v4 as uuidv4 } from "uuid";
import { selectPhysics } from "./physicsSlice";

export const Physics = () => {
  let physicsUrl = "https://phys.org/physics-news/"; 
  const physicsUrls = useSelector(selectPhysics);
  const dispatch = useDispatch();
  const titleQuery =
    "body > main > div.container.py-5 > div:nth-child(3) > div.col-md-10.col-lg-6 > section > div > div.col-12.mt-3.mb-5.mb-lg-0 > article > h1";
  const textQuery =
    "body > main > div.container.py-5 > div:nth-child(3) > div.col-md-10.col-lg-6 > section > div > div.col-12.mt-3.mb-5.mb-lg-0 > article > div.mt-4.article-main";
  useEffect(() => {
    dispatch(fetchUrlAsync(physicsUrl));
  }, []);

  return (
    <div className="  pl-0 lg:pl-28 pt-10 pb-72">
      {physicsUrls.length > 0 &&
        physicsUrls.map((url) => {
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
