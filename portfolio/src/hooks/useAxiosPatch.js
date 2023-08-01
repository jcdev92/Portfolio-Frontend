// customHooks/useAxiosPatch.js
import useStatusStore from './store/useStatusStore';
import useSkillsStore from './store/useSkillsStore';
import axios from 'axios';

const useAxiosPatch = () => {
  const patchData = async (url, data) => {
    const token = localStorage.getItem('token');
    const skills = useSkillsStore.getState().skills;

    try {
      const res = await axios.patch(url, data, {
        headers: {
          Authorization: `jwt ${token}`,
        },
      });

      useStatusStore.getState().setSuccess(res.status);

      const updatedSkills = skills.map((skill) => {
        if (skill.id === res.data.data.id) {
          return res.data.data;
        } else {
          return skill;
        }
      });

      useSkillsStore.getState().setSkills(updatedSkills);
    } catch (err) {
      useStatusStore
        .getState()
        .setError(
          `No se pudo actualizar los datos. Mensaje de error: ${
            err.response.data.message || 'Error desconocido'
          }`
        );
    }
  };

  return { patchData };
};

export default useAxiosPatch;
