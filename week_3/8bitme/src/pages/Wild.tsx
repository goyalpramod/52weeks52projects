import backgroundJail from '../assets/background/dungeon.png'
import genie from '../assets/character/genie.png'


const Wild = () => {
    return (
    <div className='position-absolute'>
        <img 
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={backgroundJail} 
        alt=''
        />
        <img src={genie} className='absolute bottom-40 left-100 scale-160' alt=''/>
    </div>
    );
}

export default Wild