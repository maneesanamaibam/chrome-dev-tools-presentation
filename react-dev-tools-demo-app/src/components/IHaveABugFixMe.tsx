import { useEffect, useState } from "react";

type PostDetails = {
  title: string;
  body: string;
};

export default function IHaveABugFixMe() {
  const [postId, setPostId] = useState("1");
  const [isLoading, setIsLoading] = useState(false);
  const [postDetails, setPostDetails] = useState<PostDetails>(
    {} as PostDetails
  );

  function fetchPostDetails() {
    const postDetailsURL = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    fetch(postDetailsURL)
      .then((data) => data.json())
      .then((result) => {
        console.log("User details result", result);
        if (Object.values(result).length !== 0) {
          setPostDetails(result);
          console.trace("tracing fetching user details: ");
        }
        setIsLoading(false);
      });
  }
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      fetchPostDetails();
    }, 1000);
  }, [postId]);

  function Counter() {
    function getNewPostId() {
      setPostId(postId + 1);
    }
    return (
      <div>
        <span className="text-xl block m-2 ">Post id: {postId}</span>
        <button
          className="bg-indigo-400 text-white p-2 m-2 rounded-md"
          onClick={getNewPostId}
        >
          New post id
        </button>
      </div>
    );
  }
  return (
    <>
      <div className="max-w-[90%] mx-auto flex flex-col items-center p-2">
        <h3 className="bg-gray-200 rounded-md p-4 text-3xl m-3 text-red-400 font-semi-bold">
          I have a bug fix me !
        </h3>
        <Counter />

        {isLoading && <p>Fetching post details .....</p>}

        {!isLoading && (
          <div className="bg-gradient-to-tr from-teal-300 via-vanilla-400 to-indigo-300 p-3 rounded-md max-w-[400px] max-h-[300px] m-4">
            <h4 className="p-2 text-2xl font-bold text-white">
              {postDetails.title}
            </h4>
            <p className="p-2 italic text-xl text-indigo-100">
              {postDetails.body}
            </p>
          </div>
        )}
        {!isLoading && (
          <div className="bg-teal-200 p-2 rounded-md text-xl">
            <div className="p-5 bg-white  rounded-md text-teal-500 text-bold shadow-md backdrop-blur-sm backdrop-opacity-[0.2]">
              API Data:
              <pre className="text-pretty max-w-[600px] text-indigo-400 font-mono mt-3">
                {JSON.stringify(postDetails)}
              </pre>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
