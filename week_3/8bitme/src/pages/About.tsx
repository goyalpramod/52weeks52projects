import backgroundMountain from '../assets/background/mountains.png'
import monk from '../assets/character/monk.png'
import Player from '../components/Player';
import useEscapeToHub from '../hooks/useEscapeToHub';

// arrayOfMonkDialoges = [
//     "Greetings fellow traveler, what brings you here?",
//     "Are we all not?",
//     "None of us do... let me help you out. Press I."
// ]

// arrayOfCharacterDialoges = [
//     "I am lost",
//     "I meant...I do not know whoiam",
// ]

const About = () => {
    useEscapeToHub()
    return (
    <div className='position-absolute'>
        <img 
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={backgroundMountain} 
        alt=''
        />
        <img src={monk} className='absolute bottom-40 left-300 scale-160' alt=''/>
        <div className='translate-y-28'>
            <Player/>
        </div>
    </div>
    );
}

export default About