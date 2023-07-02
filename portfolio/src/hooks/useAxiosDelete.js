import axios from "axios";
const useAxiosDelete = (url) => {
  const token = localStorage.getItem("token");
  axios
    .delete(url, {
      headers: {
        Authorization: `jwt ${token}`,
      },
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export default useAxiosDelete;
