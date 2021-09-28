import { apiUrl } from 'config';
import { fetch } from 'helpers';

export const profileService = {
    getAll,
    getById,
    create,
    update,
    delete: _delete,
};

const baseUrl = `${apiUrl}/profile`;

function getAll() {
    return fetch.get(baseUrl);
}

function getById(id) {
    return fetch.get(`${baseUrl}/${id}`);
}

function create(params) {
    return fetch.post(baseUrl, params);
}

function update(id, params) {
    return fetch.put(`${baseUrl}/${id}`, params);
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(id) {
    return fetch.delete(`${baseUrl}/${id}`);
}
