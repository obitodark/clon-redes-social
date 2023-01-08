import Headers from './Avatar';
import FooterPublication from './FooterPublication';
import MediaPost from './MediaPost';

import './publication.styled.css';

const Publication = () => {
    return (
        <div className="container-publication">
            <div>
                <Headers />
            </div>
            <div>
                <MediaPost />
            </div>
            <div>
                <FooterPublication />
            </div>
        </div>
    );
};
export default Publication;
