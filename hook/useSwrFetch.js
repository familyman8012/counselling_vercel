import axios from "axios";
import useSwr from "swr";

function useSwrFetch(url) {
  const fetcher = async (url) => {
    const resp = await axios.get(url);
    return resp.data;
  };

  const { mutate, data, error } = useSwr(url, fetcher);
  return {
    mutate: mutate,
    swrdata: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useSwrFetch;
