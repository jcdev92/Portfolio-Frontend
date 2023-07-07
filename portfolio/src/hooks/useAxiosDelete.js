import axios from "axios";
import useSkillsStore from "./store/useSkillsStore";

const useAxiosDelete = (url) => {
  const token = localStorage.getItem("token");
  const skills = useSkillsStore.getState().skills;
  console.log(skills);
  axios
    .delete(url, {
      headers: {
        Authorization: `jwt ${token}`,
      },
    })
    .then((res) => {
      console.log(res);
      useSkillsStore
        .getState()
        .setSkills([
          ...skills.filter((skill) => skill.id !== res.data.id),
        ]);
    })
    .catch((err) => console.log(err));
};

export default useAxiosDelete;
