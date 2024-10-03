import axios from 'axios';

const API_URL = 'https://inviting-courage-d04dc3db91.strapiapp.com';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        Authorization: `Bearer d67f21a649b6ec9e6835269f3ee4b88293e906712df3efd78118b4cfb522a52d51ae1d4e957ad3dcd167e713e9a7cc96687f8c273960d443853a8bbb91a1eb783fbed6dbf73eac478eda2910ea2b4dc0dba6ba7d4a5b3f4c7e494b8da337ebeba5eba2f09e4c1bb4231b5a8293bed984a23ba019980d7f0bbea8582713a77ca2`,
        'Content-Type': 'application/json',
    },
});

export const fetchRequest = async (params) => {
    const response = await api.get(`/api/${params}`);
    return response.data;
};