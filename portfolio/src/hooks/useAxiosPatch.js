import axios from "axios";
const useAxiosPatch = (url, data, setStatus) => {
  const token = localStorage.getItem("token");
  axios
    .patch(url, data, {
      headers: {
        Authorization: `jwt ${token}`,
      },
    })
    .then((res) => {
      console.log(res);
      setStatus(res.status);
    })
    .catch((err) => {
      alert(
        `data cannot be updated, error message: ${err.response.data.message}`
      );
    });
};

export default useAxiosPatch;
