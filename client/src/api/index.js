import axios from "axios";

const baseURL = "http://localhost:5000/";

export const validateUser = async (token) => {
  try {
    const res = await axios.get(`${baseURL}api/users/login`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return res.data;
  } catch (error) {
    return null;
  }
};

  export const getUserById = async (userId) => {
    try {
      const res = axios.get(`${baseURL}api/users/getUser/${userId}`);

      return res;
    } catch (error) {
      return null;
    }
  
};
