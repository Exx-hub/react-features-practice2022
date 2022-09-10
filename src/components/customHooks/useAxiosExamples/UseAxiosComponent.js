import React from "react";
import useAxios from "./useAxios";
import axiosInstance from "../../../apis/axiosInstance";

function UseAxiosComponent() {
  const [response, error, loading, refetch] = useAxios({
    axiosInstance: axiosInstance,
    method: "GET",
    url: "/",
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      // data: {} // if needed like if for post request
    },
  });
  return (
    <article>
      <h2>Random Dad Joke</h2>
      {loading && <p>Loading...</p>}
      {!loading && error && <p>{error}</p>}
      {!loading && !error && response && <p>{response?.joke}</p>}
      {!loading && !error && !response && <p>No dad joke to display</p>}
      <button onClick={refetch}>Get another joke</button>
    </article>
  );
}

export default UseAxiosComponent;
