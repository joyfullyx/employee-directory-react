import axios from "axios";

const api = {
  search: function() {
    return axios.get("https://randomuser.me/api/?results=30&nat=us");
  },
};

export default api;