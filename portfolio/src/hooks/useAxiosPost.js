import axios from "axios";
const useAxiosPost = (url, data, setStatus) => {
  const token = localStorage.getItem("token");
  axios
    .post(url, data, {
      headers: {
        Authorization: `jwt ${token}`,
      },
    })
    .then((res) => {
      console.log(res);
      setStatus(res.status);
    })
    .catch((err) => {
      console.log(err);
      err.response.data.message === "Skill already exists"
        ? setStatus(
            "Skill already exists, try with diferent title and/or icon url"
          )
        : setStatus("Something went wrong try again");
    });
};

export default useAxiosPost;
