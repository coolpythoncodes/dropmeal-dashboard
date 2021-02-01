import '../Sass/TrackButton.scss';

const TrackButton = ({ color, openPopup,cursor }) => {

    return (
        <button 
            className='track__button' 
            style={{
                background:`${color}`,
                cursor:cursor?cursor:'default'
            }} 
            onClick={openPopup}
        >
            Track
        </button>
    );
}

export default TrackButton;
