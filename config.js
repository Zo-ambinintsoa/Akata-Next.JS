const apiUrl = process.env.NODE_ENV === 'development' ?
    'http://localhost:1337' // development api
    :
    'http://localhost:3000/api'; // production api

export {
    apiUrl
};