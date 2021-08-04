import axios from "axios";

export default async function useSwrCrud(method, url, data, swrdata, mutate) {
  const resp = await axios({
    method,
    url,
    data,
  }).then(function (resp) {
    mutate([...swrdata], true);
  });
}
