
import profilePic from './assets/ProfilePicture.png'

function Card() {
    return (
        <div className='card'>
            <img src={profilePic} alt="Profile picture" />
            <h2 className='card-title'>Fauste1</h2>
            <p className='card-text'>I do stuff & write code.</p>
        </div>
    );
}

export default Card