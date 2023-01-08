import ListOptions from '../ListOptions';
import './listOptions.styled.css';
const Options = ({ data }) => {
    return (
        <div>
            <div className="list-option">
                <ul>
                    {console.log(data)}
                    <ListOptions value={data} />
                </ul>
            </div>
            <div></div>
        </div>
    );
};
export default Options;
