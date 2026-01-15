import ground from '../assets/elements/ground.png'
import sun from '../assets/elements/sun.png'
import cloud2 from '../assets/elements/cloud_2.png'
import Door from '../components/Door'

import Player from '../components/Player'
import { useNavigate } from 'react-router'
import { useState } from 'react'

const Hub = () => {
    const navigate = useNavigate()
    const [playerPosition, setPlayerPosition] = useState<{x: number, y: number}>({ x:0, y:0 })



    const onLeftBoundary = () => {
        navigate("/")
    }

    return (
    <div style={{ backgroundColor: '#79C8F2', position: 'absolute', top: '0', left: '0', width: '100%', height: '100%'}}>
        <img style={{ position: 'absolute',bottom: '0'}} src={ground} alt=''/>
        <Door label="whoami" doorX={300} playerX={playerPosition.x} destination="about" />
        <Door label="projects" doorX={600} playerX={playerPosition.x} destination="projects" />
        <Door label="fun" doorX={900} playerX={playerPosition.x} destination="fun" />
        <Door label="FORBIDDEN" doorX={1200} playerX={playerPosition.x} destination="wild" />
        <img style={{ position: 'absolute',top: '0', right: '0',  transform: 'translateX(-40%)'}} className='scale-75' src={sun} alt=''/>
        <img style={{ position: 'absolute',top: '0', transform: 'translateY(43%) translateX(-50%)'}} className='scale-75' src={cloud2} alt=''/>
        <img style={{ position: 'absolute',top: '0', transform: 'translateX(100%)'}} className='scale-75' src={cloud2} alt=''/>
        <Player 
            onLeftBoundary={onLeftBoundary} 
            onPositionChange={(pos) => setPlayerPosition(pos)}
        />
    </div>
    );
}

export default Hub