import '../Sass/TrackButton.scss';

const TrackButton = ({ color, openPopup }) => {

    return (
        <button 
            className='track__button' 
            style={{
                background:`${color}`
            }} 
            onClick={openPopup}
        >
            Track
        </button>
    );
}

export default TrackButton;
