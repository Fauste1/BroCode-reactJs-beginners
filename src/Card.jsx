
import PropTypes from 'prop-types'
import defaultProfilePic from './assets/defaultProfilePic.png'

export default function Card(props) {
    return (
        <div className={ props.isOnline ? "card user-online" : "card user-offline"}>
            <img src={props.image} alt="Profile picture" />
            <h2 className='card-title'> {props.name} </h2>
            <p className='card-text'> {props.description} </p>
        </div>
    );
}

Card.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    isOnline: PropTypes.bool
}

Card.defaultProps = {
    name: "Guest",
    description: "I'm new here.",
    image: defaultProfilePic,
    isOnline: false
}