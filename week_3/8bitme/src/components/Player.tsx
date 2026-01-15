import { useEffect, useRef, useState } from 'react'
import charIdle1 from '../assets/character/char_idle_1.png'
import charIdle2 from '../assets/character/char_idle_2.png'
import charIdle3 from '../assets/character/char_idle_3.png'
import charIdle4 from '../assets/character/char_idle_4.png'
import charSkate1 from '../assets/character/char_skate_1.png'
import charSkate2 from '../assets/character/char_skate_2.png'

const Player = ({ onRightBoundary, onLeftBoundary, onPositionChange }: { onRightBoundary?: () => void, onLeftBoundary?: () => void , onPositionChange?: (pos: {x: number, y: number}) => void}) => {
    const [playerState, setPlayerState] = useState<'idle'|'skating'>('idle')
    const [currentFrame, setCurrentFrame] = useState<number>(0)
    const [position, setPosition] = useState<{x: number, y:number}>({ x:0, y: 0})

    const idleTimerRef = useRef<NodeJS.Timeout | null>(null)

    const idleFrames = [charIdle1, charIdle2, charIdle4]
    const skateFrames = [charIdle1, charSkate1, charSkate2]

    const frames = playerState === 'idle' ? idleFrames : skateFrames
    const currentImage = frames[currentFrame]

    const keysPressed = useRef<Set<string>>(new Set())

    const [direction, setDirection] = useState<'left'|'right'>('right')

    const handleKeyDown = (e: KeyboardEvent) => {
        const movementKeys = ['ArrowRight', 'ArrowLeft', 'a', 'd']
        const wasAlreadyMoving = movementKeys.some(key => keysPressed.current.has(key))
    
        keysPressed.current.add(e.key)

        if(movementKeys.includes(e.key)){
            setPlayerState('skating')
            // Only reset frame if this is the first movement key pressed
            if (!wasAlreadyMoving) {
                setCurrentFrame(0)
            }

            if(e.key === 'ArrowRight' || e.key ==='d'){
                setDirection('right')
            } else if(e.key === 'ArrowLeft' || e.key === 'a'){
                setDirection('left')
            }
        }
    }


    const handleKeyUp = (e: KeyboardEvent) => {
        keysPressed.current.delete(e.key)

        const movementKeys = ['ArrowRight', 'ArrowLeft', 'a', 'd']
        const anyMovementKeyHeld = movementKeys.some(key => keysPressed.current.has(key))

        if (!anyMovementKeyHeld){
            setPlayerState('idle')
            setCurrentFrame(0)
        }
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

    useEffect(() => {
        if (playerState === 'idle'){
            if (currentFrame === 0){
                idleTimerRef.current = setTimeout(() => {
                    setCurrentFrame(1)
                },1500)
            }else if (currentFrame === 1){
                idleTimerRef.current = setTimeout(() => {
                    setCurrentFrame(2)
                },300)
            }
        }else if (playerState === 'skating'){
            if (currentFrame === 0){
                idleTimerRef.current = setTimeout(() => {
                    setCurrentFrame(1)
                },100)
            }else if (currentFrame === 1){
                idleTimerRef.current = setTimeout(() => {
                    setCurrentFrame(2)
                }, 150)
            }
        }
        return () => {
            if (idleTimerRef.current){
                clearTimeout(idleTimerRef.current)
            }
        }
    }, [playerState, currentFrame])

    

    useEffect(() => {
        const gameLoop = setInterval(() => {
            const maxX = 2300
            const minX = 0

            if (keysPressed.current.has('ArrowRight') || keysPressed.current.has('d')){
                setPosition(prev => {
                    const newX = Math.min(prev.x + 40, maxX)
                    const newPos = { ...prev, x: newX }
                    onPositionChange?.(newPos)
                    if (newX >= maxX) {
                        onRightBoundary?.()
                    }
                    return newPos
                })
            }
            if (keysPressed.current.has('ArrowLeft') || keysPressed.current.has('a')){
                setPosition(prev => {
                    const newX = Math.max(prev.x -40, minX)
                    const newPos = { ...prev, x: newX}
                    onPositionChange?.(newPos)
                    if (newX <= minX){
                        onLeftBoundary?.()
                        return {...prev, x:maxX}
                    }
                    return newPos
                })
            }
        }, 30)

        return () => clearInterval(gameLoop)
    },[]);


    return(
        <img src={currentImage} className='scale-40 z-50' style={{ transform: `translateX(${position.x}px) scaleX(${direction === 'left' ? -1 : 1})` }} alt="" />
    );
}

export default Player;