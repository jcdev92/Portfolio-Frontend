import axios from "axios";
import useStatusStore from "./store/useStatusStore";

const useAxiosPatch = (url, data) => {
  const token = localStorage.getItem("token");
  axios
    .patch(url, data, {
      headers: {
        Authorization: `jwt ${token}`,
      },
    })
    .then((res) => {
      useStatusStore.getState().setSuccess(res.status);
    })
    .catch((err) => {
      useStatusStore
        .getState()
        .setError(
          `data cannot be updated, error message: ${err.response.data.message}`
        );
    });
};

export default useAxiosPatch;
