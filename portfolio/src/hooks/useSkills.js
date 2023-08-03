import useSkillsStore from "../store/useSkillsStore";
import useStatusStore from "../store/useStatusStore";
import axios from "axios";
import { useEffect } from "react";

const useSkills = () => {

  const token = localStorage.getItem("token");
  const skills = useSkillsStore.getState().skills;

  const useGetSkills = (url) => {
    useEffect(
      () => {
        axios
          .get(url, {
            headers: {
              Authorization: `jwt ${token}`,
            },
          })
          .then((res) => {
            useSkillsStore.getState().setSkills(res.data);
            useStatusStore.getState().setLoading(false);
          })
          .catch((err) => {
            useStatusStore.getState().setError(err.response.data.message);
            useStatusStore.getState().setLoading(false);
          });
      },
      [url]
    );
  };

  const postSkill = (url, data) => {
    
    axios
      .post(url, data, {
        headers: {
          Authorization: `jwt ${token}`,
        },
      })
      .then((res) => {
        useStatusStore.getState().setSuccess(res.data.message);
        // refreshing the skills storage
        const skills = useSkillsStore.getState().skills;
        // adding the new skill to the storage
        useSkillsStore.getState().setSkills([...skills, res.data.data]);
      })
      .catch((err) => {
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

  const patchSkill = (url, data) => {
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

  const deleteSkill = (url) => {
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

  return { useGetSkills, postSkill, patchSkill, deleteSkill };
};

export default useSkills;
