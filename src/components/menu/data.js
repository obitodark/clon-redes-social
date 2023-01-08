import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import OndemandVideoRoundedIcon from '@mui/icons-material/OndemandVideoRounded';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import GroupsIcon from '@mui/icons-material/Groups';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar } from '@mui/material';
import './menu.styled.css';

const SearchFields = () => {
    return (
        <div style={{ position: 'relative' }}>
            <SearchIcon className="icon-search" />
            <input id="search-fields" type="text" placeholder="Busqueda Facebook" />
        </div>
    );
};
const menu_center = [
    <div className="div-icon-center">
        <HomeRoundedIcon className="icons-center" sx={{ fontSize: '25px' }} />
    </div>,
    <div className="div-icon-center">
        {' '}
        <OndemandVideoRoundedIcon className="icons-center" sx={{ fontSize: '25px' }} />
    </div>,
    <div className="div-icon-center">
        <StorefrontOutlinedIcon className="icons-center " sx={{ fontSize: '25px' }} />
    </div>,
    <div className="div-icon-center">
        <GroupsIcon className="icons-center" sx={{ fontSize: '25px' }} />
    </div>,
    <div className="div-icon-center">
        <VideogameAssetIcon className="icons-center" sx={{ fontSize: '25px' }} />
    </div>,
    <div className="div-icon-menu ">
        <MenuIcon className="icons-center icon-menu" sx={{ fontSize: '25px' }} />
    </div>
];

const menu_left = [<FacebookSharpIcon sx={{ fontSize: 40 }} className="icon-facebook" />, <SearchFields />];
const menu_rigth = [
    <AppsRoundedIcon className="icons-right" />,
    <MessageRoundedIcon className="icons-right" />,
    <NotificationsRoundedIcon className="icons-right" />,
    <Avatar
        className="avatar"
        src="https://w0.peakpx.com/wallpaper/170/746/HD-wallpaper-saitama-anime-hero-hombre-de-un-solo-golpe-one-punch-man-opm-pelusa-punch-super-super-hero.jpg"
    />
];

const dataMenu = {
    menu_center,
    menu_left,
    menu_rigth
};
export default dataMenu;
