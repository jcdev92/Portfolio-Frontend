import axios from "axios";
const useAxiosPatch = (url, data) => {
  const token = localStorage.getItem("token");
  axios
    .patch(url, data, {
      headers: {
        Authorization: `jwt ${token}`,
      },
    })
    .then((res) => {
      console.log(res);
      window.location.reload();
      alert("Data Updated successfully");
    })
    .catch((err) => {
      alert(
        `data cannot be updated, error message: ${err.response.data.message}`
      );
    });
};

export default useAxiosPatch;
