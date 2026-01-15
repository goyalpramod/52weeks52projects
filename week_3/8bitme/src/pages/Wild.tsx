import backgroundJail from '../assets/background/dungeon.png'
import genie from '../assets/character/genie.png'

// arrayOfGenieDialoges = [
//     "YOU DARE ENTER THE FORBIDDEN TOMB MORTAL",
//     "I SHALL NOT LET YOU LEAVE",
//     "I.... I CAN CONSIDER IT",
//     "BUT FIRST YOU MUST SOLVE A RIDDLE",
//     "WHAT WALKS ON 4 LEGS IN THE MORNING, ON 2 IN THE EVENING, AND 3 AT NIGHT?"
// ]

// arrayOfCharacterDialoges = [
//     "I made a mistake, can I leave?",
//     "Even if I say PLEASEEEEEE",
//     "Ask away, I love riddles!"
// ]

// Give hints panel that says, accept you are stupid and take the answer

const Wild = () => {
    return (
    <div className='position-absolute'>
        <img 
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={backgroundJail} 
        alt=''
        />
        <img src={genie} className='absolute bottom-40 left-100 scale-160' alt=''/>
    </div>
    );
}

export default Wild