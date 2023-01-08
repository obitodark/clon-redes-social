import './post.styled.css';

import VideoCallIcon from '@mui/icons-material/VideoCall';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
export const icons = [
    { icon: <VideoCallIcon fontSize="large" sx={{ color: '#F23E5C' }} />, name: 'Video en vivo' },
    { icon: <PhotoLibraryIcon fontSize="large" sx={{ color: '#58C472' }} />, name: 'Foto/video' },
    { icon: <InsertEmoticonIcon fontSize="large" sx={{ color: '#F8C03E' }} />, name: 'Sentimiento/actividad' }
];
const Post = () => {
    return (
        <div className="container-post">
            <div>
                <div>
                    <img
                        src="https://depor.com/resizer/1_-U6Ovhysw-4TLmXmgqfKBGK0s=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/YGPFSKUMXVBNBPWISJH3XPAGV4.jpg"
                        alt=""
                    />
                </div>
                <div>
                    <input type="text" placeholder="¿ Que estas pensando ?" />
                </div>
            </div>
            <div>
                {icons.map((icon) => (
                    <div>
                        {icon.icon}
                        &#160;
                        <h6>{icon.name}</h6>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Post;
