import './slider.styled.css';
import { motion } from 'framer-motion';
import Users from '../../../services/randon.users';
import { useEffect, useState } from 'react';

export const images = [
    'https://i.pinimg.com/564x/0d/58/1c/0d581c52bbc87e17eefb4b4b12dd598c.jpg',
    'https://i.pinimg.com/564x/2f/d2/d8/2fd2d815c76db339f407a21d9db64ecf.jpg',
    'https://i.pinimg.com/564x/fa/20/ec/fa20ec4eb398f5d2de82970d64d22b78.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Em05eldBSjXKROP40QlIWdC78SliyAW_sA&usqp=CAU',
    'https://i.pinimg.com/564x/ba/59/9b/ba599b93ba0beec162cb7a2253ddc85c.jpg',
    'https://i.pinimg.com/564x/c3/bc/97/c3bc9770f7220de7f5a9a091e2eb25df.jpg',
    'https://i.pinimg.com/564x/8e/ac/0c/8eac0c590789dc754c6cc0944db197f7.jpg'
];
const Slider = () => {
    const [user, setUser] = useState([]);
    const getuser = async () => {
        const response = await Users.getUserRandon(7);
        setUser(response);
    };
    useEffect(() => {
        getuser();
    }, []);
    return (
        <motion.div className="container-slider">
            <motion.div className="slider" drag="x" dragConstraints={{ right: 0, left: -147 }}>
                {images.map((imagen, index) => (
                    <motion.div key={index} className="item">
                        <img src={imagen} alt="" />
                        <div className="slider-avatar">
                            <img src={`${user.length > 0 && user[index].avatar}`} alt="" />
                        </div>
                        <div className="slider-text">
                            <h4>luisito Comunica</h4>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};
export default Slider;
