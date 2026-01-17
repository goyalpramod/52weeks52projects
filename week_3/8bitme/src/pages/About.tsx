import backgroundMountain from '../assets/background/mountains.png'
import monk from '../assets/character/monk.png'
import NPC from '../components/NPC';
import Player from '../components/Player';
import useEscapeToHub from '../hooks/useEscapeToHub';

import { useState } from 'react';

// arrayOfCharacterDialoges = [
//     "I am lost",
//     "I meant...I do not know whoiam",
// ]

const About = () => {
    useEscapeToHub()
    const [playerPosition, setPlayerPosition] = useState<{x: number, y: number}>({ x:0, y:0 })

    const arrayOfMonkDialoges = [
    "Greetings fellow traveler, what brings you here?",
    "Are we all not?",
    "None of us do... let me help you out. Press I."
    ]

    return (
    <div className='position-absolute'>
        <img 
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={backgroundMountain} 
        alt=''
        />
        <div>
            <NPC NPCX={1200} playerX={playerPosition.x} char={monk} dialogues={arrayOfMonkDialoges}></NPC>
        </div>
        <div className='absolute top-28'>
            <Player onPositionChange={(pos) => setPlayerPosition(pos)}/>
        </div>
    </div>
    );
}

export default About