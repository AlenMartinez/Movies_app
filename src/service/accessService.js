import axios from "axios";
import {API_URL} from './constants'



const register = (username, email, password) => {

  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};


const getLoginRequest = async (username, password) => {
  return await axios.post(`${API_URL}/token/`, {
      username,
      password,
    })

};


const logout = () => {
  localStorage.removeItem("user");
};



const accessService = {
  register,
  getLoginRequest,
  logout,
};

export default accessService;