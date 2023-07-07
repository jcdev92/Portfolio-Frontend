// axios fetching hook
import { useState, useEffect } from "react";
import axios from "axios";
import useProfileStore from "./store/useProfileStore";
import useSkillsStore from "./store/useSkillsStore";
import useStatusStore from "./store/useStatusStore";

const useAxiosGet = (url) => {
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
        } else if (url === "http://localhost:9000/api/v1/skill") {
          useSkillsStore.getState().setSkills(res.data);
        }
        useStatusStore.getState().setLoading(false);
      })
      .catch((err) => {
        useStatusStore.getState().setError(err.response.data.message);
        useStatusStore.getState().setLoading(false);
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
          if (url === "http://localhost:9000/api/v1/user") {
            useProfileStore.getState().setProfile(res.data.data[0]);
          } else if (url === "http://localhost:9000/api/v1/skill") {
            useSkillsStore.getState().setSkills(res.data);
          }
          useStatusStore.getState().setLoading(false);
        })
        .catch((err) => {
          useStatusStore.getState().setError(err.response.data.message);
          useStatusStore.getState().setLoading(false);
        });
    }, 1000);
    return () => clearInterval(interval);
  }, [
    url,
    useProfileStore.getState().profile,
    useSkillsStore.getState().skills,
  ]);
};

export default useAxiosGet;
