import { useRef, useState } from "react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setisLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 4;
  const nextVideoRef = useRef(null);

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`


  const handleMiniVdClick = () => {
    setHasClicked(true);


    setCurrentIndex(prev => prev + 1);
  }

  const handleVideoLoad = () => {
    setLoadedVideos(prev => prev + 1);
  }

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-x-hidden rounded-lg bg-blue-75">
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 cursor-pointer overflow-hidden rounded-lg">
            <div onClick={handleMiniVdClick} className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 opacity-100">
              <video 
              ref={nextVideoRef}
              src={getVideoSrc(currentIndex+1)}
              loop
              muted
              id="current-video"
              className="size-64 origin-center scale-150 object-cover object-center"
              onLoadedData={handleVideoLoad}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero