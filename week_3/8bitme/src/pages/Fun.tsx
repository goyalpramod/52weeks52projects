import ground from '../assets/elements/ground.png'
import useEscapeToHub from '../hooks/useEscapeToHub'
import Player from '../components/Player'

const Fun = () => {
    useEscapeToHub()
    return (
    <div className="" style={{ backgroundColor: '#79C8F2', position: 'absolute', top: '0', left: '0', width: '100%', height: '100%'}}>
        <img style={{ position: 'absolute',bottom: '0'}} src={ground} alt=''/>
        <Player />
    </div>
    );
}

export default Fun