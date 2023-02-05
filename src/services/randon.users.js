import { API_URL } from '../api';

const getUserRandon = async (cant = 50) => {
    try {
        const response = await fetch(`${API_URL}/?results=${cant}`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
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
