import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import './footer.styled.css';
export const icons = [
    { name: 'me gusta', icon: <ThumbUpOutlinedIcon /> },
    { name: 'comentar', icon: <ChatBubbleOutlineRoundedIcon /> },
    { name: 'compartir', icon: <ShareRoundedIcon /> }
];

const FooterPublication = () => {
    return (
        <div>
            <div className="container-view-coment">
                <div>😂 ❤️👍</div>
                <div>
                    <p>1 comentario</p>

                    <p>2 compratidos</p>
                </div>
            </div>
            <div className="icons-publication">
                {icons.map((icon, index) => (
                    <div key={index}>
                        {' '}
                        {icon.icon}&nbsp; <p>{icon.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default FooterPublication;
