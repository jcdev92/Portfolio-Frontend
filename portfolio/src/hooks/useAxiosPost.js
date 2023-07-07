import axios from "axios";
import useStatusStore from "./store/useStatusStore";

const useAxiosPost = (url, data) => {
  const token = localStorage.getItem("token");
  axios
    .post(url, data, {
      headers: {
        Authorization: `jwt ${token}`,
      },
    })
    .then((res) => {
      useStatusStore.getState().setSuccess(res.data.message);
    })
    .catch((err) => {
      console.log(err.response.data.message);
      err.response.data.message === "Skill already exists"
        ? useStatusStore
            .getState()
            .setError(
              "Skill already exists, try with diferent title and/or icon url"
            )
        : useStatusStore.getState().setError("Something went wrong try again");
    });
};

export default useAxiosPost;
