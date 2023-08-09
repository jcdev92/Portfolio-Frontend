import axios from "axios"

const url = "http://localhost:9000/api/v1/project"
const token = localStorage.getItem("token")

// get projects with axios and send the token in the header

export const getProjects = async () => {
  const res = await axios.get(url, {
    headers: {
      Authorization: `jwt ${token}`,
    },
  })
  return res.data
}