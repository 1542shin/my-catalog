import { useEffect, useState } from "react";

function Post(props) {
  const [view, setView] = useState(false);
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const handleClick = () => {
    setView(!view);
  };

  useEffect(() => {
    const load = async (url, titleQuery, textQuery) => {
      try {
        let response = await fetch(url);
        const responseText = await response.text();
        let parser = new DOMParser();
        let articleDoc = parser.parseFromString(responseText, "text/html");
        const articleTitle = articleDoc.querySelector(titleQuery);
        const articleTitleString = articleTitle.outerHTML; //make htmlobj to string
        setTitle(articleTitleString);

        const articleText = articleDoc.querySelector(textQuery);
        const articleTextString = articleText.outerHTML; //make htmlobj to string
        setText(articleTextString);
      } catch (e) {
        console.log(e);
      }
    };
    load(props.url, props.titleQuery, props.textQuery);
  }, []);

  return (
    <div
      id="post"
      className="p-3 space-y-2 sm:w-9/12 border-t border-gray-700 mx-auto"
    >
      <div>
        {title ? (
          <div
            id="title"
            className="text-[#000000] text-xl "
            dangerouslySetInnerHTML={{ __html: title }}
          ></div>
        ) : (
          <div id="loading" className="text-[#a64e4e] text-xl ">
            {" "}
            Loading Article..
          </div>
        )}
        <button
          id="viewButton"
          className=" bg-[#1d9bf0] text-white rounded-full px-3 my-4  shadow-md hover:bg-[#1a8cd8]"
          onClick={handleClick}
        >
          {view ? "Hide Article ⬆" : "Show Article ⬇"}
        </button>
        {view ? (
          <div
            id="article"
            className=" outline outline-3 p-3 text-[#000000] text-[20px] sm:text-base mt-0.5"
            dangerouslySetInnerHTML={{ __html: text }}
          ></div>
        ) : null}
      </div>
    </div>
  );
}

export default Post;
