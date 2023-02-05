import { Avatar } from '@mui/material';
import { useEffect, useState } from 'react';
import Users from '../../../services/randon.users';

const Headers = () => {
    const [user, setUser] = useState({});
    const getuser = async () => {
        const response = await Users.getUserRandon(1);
        setUser(response);
        // console.log(response);
    };
    useEffect(() => {
        getuser();
    }, []);
    return (
        <div className="avatar-name">
            <div>
                {' '}
                <Avatar src={`${user[0] !== undefined && user[0].avatar}`} />
            </div>
            <div>
                <h4>{user[0] !== undefined && user[0].name}</h4>
                <p>{user[0] !== undefined && user[0].name}</p>
            </div>
        </div>
    );
};
export default Headers;
