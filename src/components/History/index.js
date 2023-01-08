import './history.styled.css';
import Slider from './Slider';

const History = () => {
    return (
        <div className="container-history">
            <div>
                <div>
                    <input className="radio_history" type="radio" id="id1" name="history" defaultChecked={true} />
                    <label className="label_radio_history" for="id1">
                        Historias
                    </label>
                    {/* <button>Historias</button> */}
                </div>
                <div>
                    <input className="radio_history" type="radio" id="id2" name="history" />
                    <label className="label_radio_history" for="id2">
                        Reels
                    </label>
                    {/* <button>Reels</button> */}
                </div>
            </div>
            <div>
                <Slider />
            </div>
        </div>
    );
};
export default History;
