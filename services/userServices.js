import { apiUrl } from 'config';
import { fetch } from 'helpers';
import  http  from 'http-common';

export const userService = {
    getAll,
    getProfile,
    getById,
    create,
    update,
    delete: _delete,
    getUserTask,
    homeUser,
    comment
};

const baseUrl = `${apiUrl}/users`;

function getAll() {
    return fetch.get(baseUrl);
}

function getProfile() {
    return fetch.get(`${baseUrl}/new`);
}

function getById(id) {
    return fetch.get(`${baseUrl}/edit/${id}`);
}

function create(params) {
    const data = {email : params?.email , name : params?.name , profile : params?.profile , password: params?.confPassword}
    return http.post(`${baseUrl}/create`, data).then(
        function (response) {
          return response.data;
        }
      ).catch(
        function (error) {
          console.log('Show error notification!')
          return Promise.reject(error)
        }
      );
}

function update(id, params) {
    const data = {email : params?.email , name : params?.name , profile : params?.profile}
    console.log(data)
    return http.post(`${baseUrl}/update/${id}`, data).then(
        function (response) {
          return response.data;
        }
      ).catch(
        function (error) {
          console.log('Show error notification!')
          return Promise.reject(error)
        }
      );
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(id) {
    return fetch.delete(`${baseUrl}/${id}`);
}


function getUserTask(id , params) {
    return fetch.post(`${baseUrl}/getalltask/${id}`, params);
}

function homeUser(id , params) {
    return fetch.post(`${baseUrl}/home/${id}`, params);
}

function comment(id , params) {
    return fetch.post(`${baseUrl}/comment/${id}`, params);
}