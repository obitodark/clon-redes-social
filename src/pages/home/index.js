import { useContext, useEffect, useState } from 'react';
import { ViewPublication, ViewOptions, ViewFriends, ViewHistory, ViewPost, ViewModal } from '../../components';
import { DataContext } from '../../context/DataProvider.context';

import data from './data';
import './home.styled.css';
// import '../../components/menu/menu.styled.css';
const Home = () => {
    const { dataUsers, modalOpen, setModalOpen } = useContext(DataContext);
    // const [users, setUser] = useState(null);
    // const getuser = async () => {

    //     const response = await Users.getUserRandon();
    //     console.log(response);
    //     setUser(response);
    // };

    // useEffect(() => {
    //     getuser();
    // }, []);
    return (
        <div>
            {modalOpen ? <ViewModal body={<ViewOptions data={data.listOptions} />} /> : ''}
            <div className="container-body">
                <div className="sticky">
                    <ViewOptions data={data.listOptions} />
                </div>
                <div>
                    <ViewHistory />
                    <ViewPost />
                    <ViewPublication />
                    <ViewPublication />
                </div>
                <div className="sticky">
                    <h4 style={{ color: '#B0B3B8', fontSize: '18px', fontWeight: 600 }}> Contactos</h4>
                    <ViewFriends />{' '}
                </div>
            </div>
        </div>
    );
};

export default Home;
