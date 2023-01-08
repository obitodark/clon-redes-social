import { useContext } from 'react';
import { DataContext } from '../../context/DataProvider.context';

const styledModal = {
    position: 'fixed',
    top: 0,
    left: 0,
    padding: '10px',
    width: '100%',
    height: '100%',
    zIndex: 10,
    backgroundColor: '#18191A',
    top: '60px',
    left: '-7px'
};

const Modal = ({ body }) => {
    const { handleModal } = useContext(DataContext);
    return (
        <div style={styledModal}>
            <div style={{ position: 'relative' }}>
                {body}
                <h3 onClick={handleModal} style={{ position: 'absolute', top: '-20px', right: '20px', color: 'white', cursor: 'pointer' }}>
                    X
                </h3>
            </div>
        </div>
    );
};
export default Modal;
