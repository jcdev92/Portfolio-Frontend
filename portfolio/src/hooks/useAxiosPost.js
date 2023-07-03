import axios from "axios";
const useAxiosPost = (url, data) => {
  const token = localStorage.getItem("token");
  axios
    .post(url, data, {
      headers: {
        Authorization: `jwt ${token}`,
      },
    })
    .then((res) => console.log(res))
    .catch(
      (err) => console.log(err)
    );
};

export default useAxiosPost;