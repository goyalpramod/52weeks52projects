import backgroundTrophy from '../assets/background/trophy.png'
import alfred from '../assets/character/butler.png'

const Projects = () => {
    return (
    <div className='position-absolute'>
        <img 
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={backgroundTrophy} 
        alt=''
        />
        <img src={alfred} className='absolute bottom-40 left-100 scale-160' alt=''/>
    </div>
    );
}

export default Projects