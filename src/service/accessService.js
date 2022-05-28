import axios from "axios";
import {API_URL} from './constants'

//login
const getLoginRequest = async (username, password) => {
  return await axios.post(`${API_URL}/token/`, {
      username,
      password,
    })

};

//token verific
const getTokenVerifyRequest = async (token) => {
  return await axios.post(`${API_URL}/token/verify/`, {
  "token": token
})

};

const logout = () => {
  localStorage.removeItem("user");
};



const accessService = {
  getTokenVerifyRequest,
  getLoginRequest,
  logout,
};

export default accessService;