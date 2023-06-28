import axios from "axios";
const useAxiosPatch = (url, data) => {
  const token = localStorage.getItem("token");
  axios
    .patch(url, data, {
      headers: {
        Authorization: `jwt ${token}`,
      },
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export default useAxiosPatch;
