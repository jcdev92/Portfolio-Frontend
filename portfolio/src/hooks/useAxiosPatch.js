import axios from "axios";
import useStatusStore from "./store/useStatusStore";
import useSkillsStore from "./store/useSkillsStore";

const useAxiosPatch = (url, data) => {
  const token = localStorage.getItem("token");
  const skills = useSkillsStore.getState().skills;
  axios
    .patch(url, data, {
      headers: {
        Authorization: `jwt ${token}`,
      },
    })
    .then((res) => {
      useStatusStore.getState().setSuccess(res.status);
      const updatedSkills = skills.map((skill) => {
        if (skill.id === res.data.data.id) {
          return res.data.data;
        } else {
          return skill;
        }
      });
      useSkillsStore.getState().setSkills(updatedSkills);
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
