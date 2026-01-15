import { useEffect } from 'react';
import door from '../assets/elements/door_1.png'
import doorOpen from '../assets/elements/door_3.png'
import { useNavigate } from 'react-router';

interface DoorProps {
    label: string
    destination: string  
    doorX: number
    playerX: number
}

const Door = ({ label, destination, doorX, playerX }: DoorProps) => {
    const navigate = useNavigate()
    const playerCenter = playerX + 80  
    const doorCenter = doorX + 100
    const isNear = Math.abs(playerCenter - doorCenter) < 150



    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === ' ' || e.key === 'Enter') {
                if (isNear){
                    navigate("/" + destination)
                }
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [playerX, doorX, destination, navigate])

    return (
        <div className='absolute bottom-48 flex flex-col items-center' style={{ left: doorX }}>
            <p className='text-nowrap text-white text-center translate-y-18' style={{ fontFamily: '"Press Start 2P", cursive' }}>{label}</p>
            <img className='scale-75' src={isNear ? doorOpen : door} alt='' />
        </div>
    );

}

export default Door