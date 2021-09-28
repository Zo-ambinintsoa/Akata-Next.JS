import axios from 'axios';

export const fetch = {
    get,
    post,
    put,
    delete: _delete
};

// let config = {
//     method: method.toLowerCase(),
//     url: uri,
//     baseURL: API_URL,
//     headers: { 'Authorization': 'Bearer ' + getToken() },
//     validateStatus: function (status) {
//       return status >= 200 && status < 400
//     }
//   }

function get(url) {
    return axios({
        method: 'GET',
        url : url
    })
    .then(
        function (response) {
          return response.data
        }
      ).catch(
        function (error) {
          console.log('Show error notification!')
          return Promise.reject(error)
        }
      );
}

function post(url, body) {
   return axios({
        method: 'POST',
        url : url,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: JSON.stringify(body)
    })
    .then(
        function (response) {
          return response.data
        }
      ).catch(
        function (error) {
          console.log('Show error notification!')
          return Promise.reject(error)
        }
      )
}

function put(url, body) {
   return axios({
        method: 'PUT',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: JSON.stringify(body),
        url: url 
    })
    .then(
        function (response) {
          return response.data
        }
      ).catch(
        function (error) {
          console.log('Show error notification!')
          return Promise.reject(error)
        }
      )
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(url) {
  return  axios( {
        method: 'DELETE',
        url: url,
    })
    .then(
        function (response) {
          return response.data
        }
      ).catch(
        function (error) {
          console.log('Show error notification!')
          return Promise.reject(error)
        }
      )
}
