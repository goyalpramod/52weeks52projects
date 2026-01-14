import { useEffect, useRef, useState } from 'react'
import charIdle1 from '../assets/character/char_idle_1.png'
import charIdle2 from '../assets/character/char_idle_2.png'
import charIdle4 from '../assets/character/char_idle_4.png'
import charSkate1 from '../assets/character/char_skate_1.png'
import charSkate2 from '../assets/character/char_skate_2.png'

const Player = () => {
    const [playerState, setPlayerState] = useState<'idle'|'skating'>('idle')
    const [currentFrame, setCurrentFrame] = useState<number>(0)
    const [position, setPosition] = useState<{x: number, y:number}>({ x:0, y: 0})

    const idleTimerRef = useRef<NodeJS.Timeout | null>(null)

    const idleFrames = [charIdle1, charIdle2, charIdle4]
    const skateFrames = [charIdle1, charSkate1, charSkate2]

    const frames = playerState === 'idle' ? idleFrames : skateFrames
    const currentImage = frames[currentFrame]

    useEffect(() => {
        if (playerState === 'idle'){
            if (currentFrame === 0){
                idleTimerRef.current = setTimeout(() => {
                    setCurrentFrame(1)
                },3000)
            }else if (currentFrame === 1){
                idleTimerRef.current = setTimeout(() => {
                    setCurrentFrame(2)
                },300)
            }
        }else if (playerState === 'skating'){
            if (currentFrame === 0){
                idleTimerRef.current = setTimeout(() => {
                    setCurrentFrame(1)
                },500)
            }else if (currentFrame === 1){
                idleTimerRef.current = setTimeout(() => {
                    setCurrentFrame(2)
                }, 200)
            }
        }
        return () => {
            if (idleTimerRef.current){
                clearTimeout(idleTimerRef.current)
            }
        }
    }, [playerState, currentFrame])

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'ArrowRight' || e.key === 'd'){
            setPosition(prev => ({...prev, x: prev.x + 10 }))
        }else if (e.key === 'ArrowLeft' || e.key === 'a'){
            setPosition(prev => ({...prev, x: prev.x - 10}))
        }
        if (['ArrowRight', 'ArrowLeft', 'a', 'd'].includes(e.key)){
            if (playerState !== 'skating'){
                setPlayerState('skating')
                setCurrentFrame(0)
            }
        }
    }
    const handleKeyUp = (e: KeyboardEvent) => {
        setPlayerState('idle')
        setCurrentFrame(0)
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        }
    },[]

    );

    return(
        <img src={currentImage} className='scale-20' style={{ transform: `translateX(${position.x}px)` }} alt="" />
    );
}

export default Player;