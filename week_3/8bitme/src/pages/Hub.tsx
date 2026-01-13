import ground from '../assets/elements/ground.png';

const Hub = () => {
    return (
    <div className="bg-[#79C8F2] min-h-screen">
        <div className='absolute bottom-0 w-full'>
            <img src={ground} alt="Logo" />
        </div>
    </div>
    );
}

export default Hub