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
        ? alert("Skill already exists, try with diferent title and icon url")
        : alert("Something went wrong try again");
    });
};

export default useAxiosPost;
