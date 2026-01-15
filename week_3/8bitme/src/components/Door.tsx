import { useEffect, useState } from 'react';
import door from '../assets/elements/door_1.png'
import doorOpen from '../assets/elements/door_2.png'
import { useNavigate } from 'react-router';

interface DoorProps {
    label: string
    destination: string  
    doorX: number
    playerX: number
}

const Door = ({ label, destination, doorX, playerX }: DoorProps) => {
    const navigate = useNavigate()
    const isNear = Math.abs(playerX - doorX) < 100

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
        <div  style={{ position: 'absolute', bottom: '0' }}>
            <p style={{ textAlign: 'center', color: 'white', fontFamily: '"Press Start 2P", cursive' }}>{label}</p>
            <img style={{ position: 'absolute',bottom: '0', transform: 'translateY(9%) scale(0.35)'}} src={isNear ? doorOpen : door}  alt=''/>
        </div>
    );

}

export default Door