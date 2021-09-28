import { apiUrl } from 'config';
import { fetch } from 'helpers';
import  http  from 'http-common';


export const ProjectService = {
    getProject,
    getById,
    create,
    update,
    delete: _delete,
    effort,
    status,
    getAll,
    getStates,
};

const baseUrl = `${apiUrl}/project`;

function getAll() {
    return fetch.get(baseUrl);
}
function getStates() {
    return fetch.get(`${baseUrl}/new`);
}

function getProject(id) {
    return fetch.post(`${baseUrl}/view/${id}`);
}

function getById(id) {
    return http.get(`${baseUrl}/view/${id}`).then(
        function (response) {
            var tasks = response.data.tasks
            var project = response.data.project
            var teams = response.data.teams
            var st = response.data.states
            const data = { tasks , project , st , teams };
          return data;
        }
      ).catch(
        function (error) {
          console.log('Show error notification!')
          return Promise.reject(error)
        }
      );
}

function create(params) {
    return fetch.post(baseUrl, params);
}

function update(id, params) {
    return fetch.put(`${baseUrl}/effort/${id}`, params);
}

function effort(id, params) {
    return fetch.post(`${baseUrl}/${id}`, params);
}

function status(id, params) {
    return fetch.put(`${baseUrl}/status/${id}`, params);
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(id) {
    return fetch.delete(`${baseUrl}/${id}`);
}
