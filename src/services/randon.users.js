import { API_URL } from '../api';

const getUserRandon = async (cant = 1) => {
    try {
        const response = await fetch(`${API_URL}/?results=50`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const { results } = await response.json();
        const data = results.map((result) => {
            const dataRandon = {};
            dataRandon.name = `${result.name.first} ${result.name.last}`;
            dataRandon.avatar = `${result.picture.thumbnail}`;
            return dataRandon;
        });

        return data;
    } catch (error) {
        return error;
    }
};

const Users = {
    getUserRandon
};
export default Users;
