import Post from "../Post";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUrlAsync, selectBuddhism } from "./buddhismSlice";
import { v4 as uuidv4 } from "uuid";

export const fetchDoc = async (url) => {
  try {
    let response = await fetch(url);
    const responseText = await response.text();
    var parser = new DOMParser();
    var doc = parser.parseFromString(responseText, "text/html");
    //console.log("succeed");
    return doc;
  } catch (e) {
    console.log(e);
  }
};

export const Buddhism = () => {
  let buddhismUrl = `https://www.buddhistdoor.net/features/`;  
  const buddhism = useSelector(selectBuddhism);
  const dispatch = useDispatch();
  const titleQuery =
    "body>div:nth-child(2)>div:nth-child(1)>section:nth-child(3)>div:nth-child(1)>div:nth-child(1)>div:nth-child(1)>div:nth-child(1)>div:nth-child(1)>div:nth-child(2)>div:nth-child(1)>h3:nth-child(1)";
  const textQuery =
    "body>div:nth-child(2)>div:nth-child(1)>section:nth-child(3)>div:nth-child(1)>div:nth-child(1)>div:nth-child(1)>div:nth-child(1)>div:nth-child(1)>div:nth-child(4)>div:nth-child(1)";
  useEffect(() => {
    dispatch(fetchUrlAsync(buddhismUrl));
  }, []);



  return (
    <div className="  pl-0 lg:pl-28 pt-10 pb-72">
      {buddhism.length > 0 &&
        buddhism.map((url) => {
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