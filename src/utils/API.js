import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=100&nat=us&inc=picture,name,phone,email,dob";

export default {
  getEmployees: function(query) {
    return axios.get(BASEURL);
  }
};
