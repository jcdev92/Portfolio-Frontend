import { useEffect } from "react";
import useProfileStore from "../store/useProfileStore";
import useStatusStore from "../store/useStatusStore";
import axios from "axios";

const useProfile = () => {
  
  const token = localStorage.getItem("token");
  const profile = useProfileStore.getState().profile;

  const useGetProfile = (url) => {
    useEffect(
      () => {
        axios
          .get(url, {
            headers: {
              Authorization: `jwt ${token}`,
            },
          })
          .then((res) => {
            useProfileStore.getState().setProfile(res.data.data[0]);
            useStatusStore.getState().setLoading(false);
          })
          .catch((err) => {
            useStatusStore.getState().setError(err.response.data.message);
            useStatusStore.getState().setLoading(false);
          });
      },
      [url]
    );
  };

  const patchProfile = (url, data) => {
    axios
      .patch(url, data, {
        headers: {
          Authorization: `jwt ${token}`,
        },
      })
      .then((res) => {
        useStatusStore.getState().setSuccess(res.data.message);
        useProfileStore.getState().setProfile(profile);
      })
      .catch((err) => {
        console.log(err.response?.data?.message);
      });
  };

  return { useGetProfile, patchProfile };
};

export default useProfile;
