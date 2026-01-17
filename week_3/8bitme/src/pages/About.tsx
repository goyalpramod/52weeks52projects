import backgroundMountain from '../assets/background/mountains.png'
import monk from '../assets/character/monk.png'
import NPC from '../components/NPC';
import Player from '../components/Player';
import useEscapeToHub from '../hooks/useEscapeToHub';

import { useState } from 'react';

type DialogueLine = {
  speaker: 'npc' | 'player'
  text: string
}

const About = () => {
    const [playerPosition, setPlayerPosition] = useState<{x: number, y: number}>({ x:0, y:0 })
    const [isDialogActive, setDialogActive] = useState<boolean>(false)

    useEscapeToHub()
    
    const dialogue: DialogueLine[] = [
        { speaker: 'npc', text: "Greetings fellow traveler, what brings you here?" },
        { speaker: 'player', text: "I am lost..." },
        { speaker: 'npc', text: "Are we all not?" },
        { speaker: 'player', text: "I meant... I do not know who I am." },
        { speaker: 'npc', text: "None of us do... let me help you out. Press I." }
    ]


    return (
    <div className='position-absolute'>
        <img 
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={backgroundMountain} 
        alt=''
        />
        <div>
            <NPC NPCX={1200} playerX={playerPosition.x} char={monk} dialogues={dialogue} onDialogueChange={setDialogActive}></NPC>
        </div>
        <div className='absolute top-28'>
            <Player onPositionChange={(pos) => setPlayerPosition(pos)} isDialogActive={isDialogActive}/>
        </div>
    </div>
    );
}

export default About