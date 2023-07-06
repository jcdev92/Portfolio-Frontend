// axios fetching hook
import { useState, useEffect } from "react";
import axios from "axios";
import useProfileStore from "./store/useProfileStore";
import useSkillsStore from "./store/useSkillsStore";

const useAxiosGet = (url) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(url, {
        headers: {
          Authorization: `jwt ${token}`,
        },
      })
      .then((res) => {
        if (url === "http://localhost:9000/api/v1/user") {
          useProfileStore.getState().setProfile(res.data.data[0]);
        } else if (url === "http://localhost:9000/api/v1/skills") {
          useSkillsStore.getState().setSkills(res.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.response.data.message);
        setLoading(false);
      });
  }, []);


  // if the data in the server is updated, the data in the client will be updated too
  useEffect(() => {
    const token = localStorage.getItem("token");
    const interval = setInterval(() => {
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
        .catch((err) => {
          setError(err.response.data.message);
          setLoading(false);
        });
    }, 1000);
    return () => clearInterval(interval);
  }, [data]);

  return { data, loading, error };
};

export default useAxiosGet;
