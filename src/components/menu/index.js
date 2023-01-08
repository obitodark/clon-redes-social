import List from './List';
import dataMenu from './data';
import './menu.styled.css';
const Menu = ({ children }) => {
    return (
        <div>
            <div className="container-menu">
                <div>
                    <List data={dataMenu.menu_left} />
                </div>
                <div>
                    {' '}
                    <List data={dataMenu.menu_center} />
                </div>
                <div style={{ marginRight: '10px' }}>
                    <List data={dataMenu.menu_rigth} />
                </div>
            </div>
            <div>{children}</div>
        </div>
    );
};
export default Menu;
