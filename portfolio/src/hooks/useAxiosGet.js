// useFetch hook with axios

import { useState, useEffect } from "react";
import axios from "axios";

const useAxiosGet = (url) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(url, {
        headers: {
          Authorization: `jwt ${token}`,
        },
      })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return { data, loading };
};

export default useAxiosGet;
