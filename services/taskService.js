import { apiUrl } from 'config';
import { fetch } from 'helpers';

export const taskService = {
    getTask,
    getById,
    create,
    update,
    delete: _delete,
    effort,
    status,
    getAll
};

const baseUrl = `${apiUrl}/task`;

function getTask(id) {
    return fetch.post(`${baseUrl}/Ptask/${id}`);
}
function getAll() {
    return fetch.get(`${baseUrl}`);
}

function getById(id) {
    return fetch.get(`${baseUrl}/${id}`);
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
