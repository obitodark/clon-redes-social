import { createContext, useState, useEffect } from 'react';
import Users from '../services/randon.users';

export const DataContext = createContext();
const DataProvider = ({ children }) => {
    const [dataUsers, setDataUsers] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);

    const handleModal = () => {
        setModalOpen(!modalOpen);
    };
    const getUser = async () => {
        const response = await Users.getUserRandon();

        setDataUsers(response);
        console.log('adasdas', response);
    };

    useEffect(() => {
        getUser();
    }, []);
    return <DataContext.Provider value={{ handleModal, dataUsers, modalOpen }}>{children}</DataContext.Provider>;
};
export default DataProvider;
