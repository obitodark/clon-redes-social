// import { useContext } from 'react';
// import { DataContext } from '../../context/DataProvider.context';

import { useEffect, useState } from 'react';
import Users from '../../services/randon.users';

// import ListOptions from '../ListOptions';

const Friends = () => {
    const [users, setUser] = useState([]);
    const getuser = async () => {
        const response = await Users.getUserRandon();
        console.log(response);
        setUser(response);
    };

    useEffect(() => {
        getuser();
    }, []);
    return (
        <div>
            <div className="list-option">
                <ul>
                    <div>
                        {users.length > 0
                            ? users.map((data, index) => (
                                  <li key={index}>
                                      <div>
                                          <img src={data.avatar} alt="" style={{ borderRadius: '50%' }} />
                                          {/* {dat.avatar} */}
                                          &#160; &#160;
                                          <h4 style={{ fontWeight: 600 }}>{data.name}</h4>
                                      </div>
                                  </li>
                              ))
                            : 'ads'}
                    </div>
                </ul>
            </div>
        </div>
    );
};
export default Friends;
