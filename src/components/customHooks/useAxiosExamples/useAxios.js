import { useState, useEffect } from "react";

const useAxios = (configObj) => {
  const { axiosInstance, method, url, requestConfig = {} } = configObj;

  const [response, setReponse] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(0);

  const refetch = () => setReload((prev) => prev + 1);
  // basically a dummy state, that causes a re-render when updated
  // this re-render will cause useEffect to run again as long as you pass refetch as dependency

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const res = await axiosInstance[method.toLowerCase()](url, {
          ...requestConfig,
          signal: controller.signal,
        });
        console.log(res);
        setReponse(res.data);
      } catch (err) {
        console.log(err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // cleanup

    return () => controller.abort();

    // eslint-disable-next-line
  }, [reload]);

  return [response, error, loading, refetch];
};

export default useAxios;
