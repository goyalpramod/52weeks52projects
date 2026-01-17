import { useEffect, useState } from "react"
import PixelBubble from "./PixelBubble"

type DialogueLine = {
  speaker: 'npc' | 'player'
  text: string
}

interface NPCProps {
    NPCX: number
    playerX: number
    char: string
    dialogues: DialogueLine[]
    onDialogueChange ?: (isActive: boolean) => void
}

const NPC = ({ NPCX, playerX, char, dialogues, onDialogueChange}: NPCProps) => {
    const [dialogueIndex, setDialogueIndex] = useState<number>(0)
    
    const playerCenter = playerX + 80  
    const NPCCenter = NPCX + 100
    const isNear = Math.abs(playerCenter - NPCCenter) < 150

    useEffect(() => {
        const isActive = isNear && dialogueIndex < dialogues.length
        onDialogueChange?.(isActive)
    }, [isNear, dialogueIndex, dialogues.length])

    const handleOnClick = (e: KeyboardEvent) => {
        if (e.key === ' '){
            setDialogueIndex(prev => prev + 1)
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', handleOnClick);
        return () => {
            window.removeEventListener('keydown', handleOnClick);
        }
    }, [])

    useEffect(() => {
        if (!isNear){
            setDialogueIndex(0);
        }
    },[isNear])

    return (
        <div className="absolute bottom-32" style={{left: NPCX}}>
  
            {isNear && (dialogueIndex < dialogues.length) && <PixelBubble 
                variant={dialogues[dialogueIndex].speaker === 'player' ? 'primary' : 'default'}
                className="absolute bottom-9"
                >
                {dialogues[dialogueIndex].text}
                </PixelBubble>
                }
            
            <img className="scale-125" src={char} /> 
        
        </div>

    );

}

export default NPC