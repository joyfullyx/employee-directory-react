import axios from "axios";
// const BASEURL = "https://randomuser.me/api/?results=100&nat=us&inc=picture,name,phone,email,dob";
// const BASEURL = "https://randomuser.me/api/?results=100&nat=us"

// export default {
//   search: function(query) {
//     return axios.get(BASEURL + query);
//   }
// };

const api = {
  search: function() {
    return axios.get("https://randomuser.me/api/?results=100&nat=us");
  },
  // getAll: function() {
  //   return axios.get("https://randomuser.me/api/?results=100")
  // }
};

export default api;