import ground from '../assets/elements/ground.png'
import sun from '../assets/elements/sun.png'
import cloud2 from '../assets/elements/cloud_2.png'
import character from '../assets/character/char1.png'

const Start = () => {
    return (
    <div className="" style={{ backgroundColor: '#79C8F2', position: 'absolute', top: '0', left: '0', width: '100%', height: '100%'}}>
        <img style={{ position: 'absolute',bottom: '0', transform: 'translateY(43%)'}} src={ground} alt=''/>
        <img style={{ position: 'absolute',bottom: '0', transform: 'translateY(27%) scale(0.2)'}} src={character} alt=''/>
        <img style={{ position: 'absolute',top: '0', right: '0'}} src={sun} alt=''/>
        <img style={{ position: 'absolute',top: '0', transform: 'translateY(43%)'}} src={cloud2} alt=''/>
        <img style={{ position: 'absolute',top: '0', transform: 'translateX(100%)'}} src={cloud2} alt=''/>
    </div>
    );
}

export default Start