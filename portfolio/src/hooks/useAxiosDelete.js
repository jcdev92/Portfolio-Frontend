import axios from "axios";
import useSkillsStore from "./store/useSkillsStore";

const useAxiosDelete = () => {
  const token = localStorage.getItem("token");
  const skills = useSkillsStore.getState().skills;
  const deleteData = (url) => {
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
  }
  return { deleteData }
};

export default useAxiosDelete;
