import axiosInstance2 from "../../../apis/axiosInstance2";
import useAxiosFunction from "./useAxiosFunction";

import { useEffect } from "react";

const UseAxiosFunctionComponent = () => {
  const [posts, error, loading, axiosFetch] = useAxiosFunction();
  const getData = () => {
    axiosFetch({
      axiosInstance: axiosInstance2,
      method: "GET",
      url: "/posts",
    });
  };

  useEffect(() => {
    getData();
    // eslint-disbale-next-line
  }, []);

  const handleSubmit = () => {
    axiosFetch({
      axiosInstance: axiosInstance2,
      method: "POST",
      url: "/posts",
      requestConfig: {
        data: {
          userId: 10,
          title: "axios stuff",
          body: "axios body stuff",
        },
      },
    });
  };
  return (
    <article>
      <h2>Posts</h2>

      <div>
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={getData}>Refetch</button>
      </div>

      {loading && <p>Loading...</p>}
      {!loading && error && <p>{error}</p>}
      {!loading && !error && posts?.length && (
        <ul>
          {posts.map((post, i) => (
            <li key={i}>{`${post.id}. ${post.title}`}</li>
          ))}
        </ul>
      )}

      {!loading && !error && !posts?.length && posts?.data && (
        <p>{`userID: ${posts.data?.userId}, title: ${posts.data?.title}`}</p>
      )}

      {!loading && !error && !posts && <p>No Posts to Display</p>}
    </article>
  );
};

export default UseAxiosFunctionComponent;
