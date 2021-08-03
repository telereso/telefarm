import axios from 'axios';

//path = url
//type = get/post
//data = if post != null
//succussM = if we want to display success message after request
base_Url = 'test.com';

function ApiService(path, type, data = null, successM = false, message, baseUrl = base_Url, header = {}) {
  let url = baseUrl + path;
  if (type == 'get') {
    return axios
      .get(url, data)
      .then(async (res) => {
        return res.data;
      })
      .catch((error) => {
      });
  }

  if (type == 'post') {
    return axios
      .post(url, data, header)
      .then(async (res) => {
        return res;
      })
      .catch((error) => {
        console.log(error)
      });
  }

}

export default ApiService;
