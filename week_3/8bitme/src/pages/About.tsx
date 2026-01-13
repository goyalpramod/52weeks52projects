import backgroundMountain from '../assets/background/mountains.png'
import monk from '../assets/character/monk.png'


const About = () => {
    return (
    <div className='position-absolute'>
        <img 
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={backgroundMountain} 
        alt=''
        />
        <img src={monk} className='absolute bottom-40 left-100 scale-160' alt=''/>
    </div>
    );
}

export default About