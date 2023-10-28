
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Card from './Card.jsx'
import profilePic from './assets/ProfilePicture.png'
import orcProfilePic from './assets/OrcProfilePic.png'
import steveProfilePic from './assets/SteveProfilePic.png'

function App() {

  return(
    <>
      <Header/>
      <Card name="Fauste1" description="I write code." image={profilePic} isOnline={true}/>
      <Card name="Hexsus" description="I play videogames." image={orcProfilePic} isOnline={true}/>
      <Card name="Steve" description="I do stuff." image={steveProfilePic} isOnline={false}/>
      <Card />
      <Footer/>
    </>
  );
}

export default App
