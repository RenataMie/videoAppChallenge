import Image from "next/image";
import { useRef, useState } from "react";
import PlayIcon from "./images/play2.png";
import PauseIcon from "./images/pause.png";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export default function VideoPlayer() {
  const videoRef = useRef(null);
  // const videoContainer = useRef(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [volume2, setVolume2] = useState(1);

  const toggleVideo = () => {
    isPlaying ? videoRef.current.play() : videoRef.current.pause();
    setIsPlaying(!isPlaying);
  };

  const volumeChange = (e) => {
    const { value } = e.target;
    videoRef.current.volume = value;
    videoRef.current.muted = value === 0;
    setVolume2(value);
  };

  // FUNCAO PARA TROCAR ICONE DE VOLUME

  // const toggleVolume = () => {
  //   setVolume2(videoRef.current.volume);
  //   let audiolevel = "";

  //   if (videoRef.current.muted || videoRef.current.volume === 0) {
  //     setVolume2(0);
  //     audiolevel = "muted";
  //   } else if (videoRef.current.volume > 0.5) audiolevel = "high";
  //   else audiolevel = "low";

  //   videoContainer.current.dataset.volumeLevel = audiolevel;
  //   // console.log("volum2e", volume2);
  //   // setVolume2(0);
  // };

  return (
    <div>
      <video
        ref={videoRef}
        width="auto"
        height="auto"
        controls
        src="vi.mp4"
        // onVolumeChange={toggleVolume}
      />
      <div className="controlsContainer">
        <a onClick={toggleVideo}>
          <Image alt="play icon" src={isPlaying ? PlayIcon : PauseIcon} />
        </a>
        <input
          type="range"
          max={1}
          min={0}
          step="any"
          value={volume2}
          onChange={volumeChange}
        />
      </div>
    </div>
  );
}
