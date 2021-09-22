
import { useState, useEffect } from "react";

const useFetch = (url) => {
    var [data, setData] = useState(null);
    var abortController = new AbortController();
    useEffect(() => {
        fetch(url, {signal: abortController.signal})
        .then((resp) => {
          return resp.json();
        })
        .then((data) => {
          setData(data);
        });
        return () => {
          abortController.abort();
        }
      }, []);
    return [data, setData];
}

export default useFetch;