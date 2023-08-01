import axios from "axios";
import useStatusStore from "./store/useStatusStore";
import useSkillsStore from "./store/useSkillsStore";

const useAxiosPost = () => {
  const postData = async (url, data) => {
    const skills = useSkillsStore.getState().skills;
    const token = localStorage.getItem("token");
    axios
      .post(url, data, {
        headers: {
          Authorization: `jwt ${token}`,
        },
      })
      .then((res) => {
        useStatusStore.getState().setSuccess(res.data.message);
        useSkillsStore.getState().setSkills([...skills, res.data.data]);
      })
      .catch((err) => {
        console.log(err.response?.data?.message);
        err.response.data.message === "Skill already exists"
          ? useStatusStore
              .getState()
              .setError(
                "Skill already exists, try with diferent title and/or icon url"
              )
          : useStatusStore
              .getState()
              .setError("Something went wrong try again");
      });
  };
  return { postData };
};

export default useAxiosPost;
