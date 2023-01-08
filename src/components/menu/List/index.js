import { useContext } from 'react';
import { DataContext } from '../../../context/DataProvider.context';
import '../menu.styled.css';

export const Btn = ({ index, item }) => {
    const { handleModal } = useContext(DataContext);

    return (
        <div>
            <input
                className={`${index === 5 ? 'btn_radio radio_menu' : 'btn_radio'}`}
                type="radio"
                name="list"
                defaultChecked={index === 0 ? true : false}
                id={`radio_${index}`}
            />
            <label onClick={index === 5 ? handleModal : ''} for={`radio_${index}`}>
                {item}
            </label>
        </div>
    );
};

const List = ({ data }) => {
    return (
        <div className="list-item">
            <ul>
                {data.map((item, index) => (
                    <li key={index}>
                        {data.length > 4 ? <Btn index={index} item={item} /> : <a href="#">{item}</a>}
                        {/* <a href="#">{item}</a> */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default List;
