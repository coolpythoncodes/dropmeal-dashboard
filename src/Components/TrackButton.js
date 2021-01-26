import '../Sass/TrackButton.scss';

const TrackButton = ({ color }) => {
    return (
        <button className='track__button' style={{background:`${color}`}} >
            Track
        </button>
    );
}

export default TrackButton;
