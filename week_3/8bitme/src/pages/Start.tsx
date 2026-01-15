import ground from '../assets/elements/ground.png'
import sun from '../assets/elements/sun.png'
import cloud2 from '../assets/elements/cloud_2.png'
import Player from '../components/Player';
import { useNavigate } from 'react-router';

const Start = () => {
    const navigate = useNavigate()

    const onRightBoundary = () => {
        navigate("/hub")
    }
    return (
    <div className="" style={{ backgroundColor: '#79C8F2', position: 'absolute', top: '0', left: '0', width: '100%', height: '100%'}}>
        <img style={{ position: 'absolute',bottom: '0'}} src={ground} alt=''/>
        <Player onRightBoundary={onRightBoundary}/>
        <img style={{ position: 'absolute',top: '0', right: '0',  transform: 'translateX(-40%)'}} className='scale-75' src={sun} alt=''/>
        <img style={{ position: 'absolute',top: '0', transform: 'translateY(43%)'}} className='scale-75' src={cloud2} alt=''/>
        <img style={{ position: 'absolute',top: '0', transform: 'translateX(150%)'}} src={cloud2}  className='scale-75' alt=''/>
    </div>
    );
}

export default Start