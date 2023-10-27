
import PropTypes from 'prop-types'
import defaultProfilePic from './assets/defaultProfilePic.png'

function Card(props) {
    return (
        <div className='card'>
            <img src={props.image} alt="Profile picture" />
            <h2 className='card-title'> {props.name} </h2>
            <p className='card-text'> {props.description} </p>
        </div>
    );
}

Card.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string
}

Card.defaultProps = {
    name: "Guest",
    description: "I'm new here.",
    image: defaultProfilePic
}

export default Card