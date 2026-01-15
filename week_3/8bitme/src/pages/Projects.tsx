import backgroundTrophy from '../assets/background/trophy.png'
import alfred from '../assets/character/butler.png'
import PixelBubble from '../components/PixelBubble';

// const arrayOfAlfredDialogues = [
//     "Hello Master ****, What brings you here",
//     "Well you just started learning the art of creating in the web",
//     "Worry not, for you have learned much in the world of ML, Press M to see it yourself."
// ]

// const arrayOfCharacterDialogues =[
//     "I just wanted to see, all I have done so far.... Why is it so empty?",
//     "You are always there when I need you, thank you!"
// ]

const Projects = () => {
    return (
    <div className='position-absolute'>
        <img 
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={backgroundTrophy} 
        alt=''
        />
        <PixelBubble className="absolute bottom-150 left-20">
            Hello! I am a React Component.
        </PixelBubble>
        <img src={alfred} className='absolute bottom-40 left-100 scale-160' alt=''/>
    </div>
    );
}

export default Projects