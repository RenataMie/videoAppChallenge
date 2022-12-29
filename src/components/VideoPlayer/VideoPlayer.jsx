import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import PlayIcon from "./images/play.png";
import PauseIcon from "./images/pause.png";
import VolumeIcon from "./images/volume.png";
import VolumeMute from "./images/mute.png";
import FullScreenIcon from "./images/full.png";
import ExitFullScreenIcon from "./images/exitfull.png";

import * as S from "./style";

export default function VideoPlayer() {
  const videoRef = useRef(null);
  const videoContainer = useRef(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(1);
  const [videoDurationPercentage, setVideoDurationPercentage] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [iosDevice, setIosDevice] = useState(false);

  const togglePlayPause = () => {
    isPlaying ? videoRef.current.play() : videoRef.current.pause();
    setIsPlaying(!isPlaying);
  };

  const volumeChange = (e) => {
    const { value } = e.target;
    videoRef.current.volume = value;
    videoRef.current.muted = value === 0;
    setVolume(value);
  };

  const toggleMuteVolume = () => {
    if (volume === 0) {
      setVolume(1);
      videoRef.current.muted = false;
    } else {
      videoRef.current.muted = true;
      setVolume(0);
    }
  };

  const toggleFullScreen = () => {
    if (isFullScreen) {
      setIsFullScreen(false);
      iosDevice
        ? videoRef.current.webkitExitFullscreen()
        : document.exitFullscreen();
    } else {
      iosDevice
        ? videoRef.current.webkitEnterFullScreen()
        : videoContainer.current.requestFullscreen();

      setIsFullScreen(true);
    }
  };

  const handleTimeUpdate = () => {
    const currentPercentage =
      (videoRef.current.currentTime / videoRef.current.duration) * 100;
    setVideoDurationPercentage(currentPercentage);
  };

  const handleVideoPercentage = (e) => {
    const { value } = e.target;
    videoRef.current.currentTime = (videoRef.current.duration / 100) * value;
    setVideoDurationPercentage(value);
  };

  useEffect(() => {
    if (videoRef.current.ended) setVideoDurationPercentage(0);
  }, [videoRef.current?.ended]);

  useEffect(() => {
    if (window !== undefined) {
      const ios = /iPad|iPhone|iPod/.test(window?.navigator?.userAgent);
      setIosDevice(ios);
    }
  }, []);

  return (
    <S.VideoContainer ref={videoContainer}>
      <S.Video
        ref={videoRef}
        width="100%"
        height="100%"
        src="/videos/animals2.mp4"
        playsInline
        onTimeUpdate={handleTimeUpdate}
      />
      <S.ControlsContainer>
        <div>
          <S.VideoTimeLine
            type="range"
            max={100}
            min={0}
            value={videoDurationPercentage}
            onChange={handleVideoPercentage}
          />
        </div>

        <S.VideoControls>
          <S.ControlsRight>
            <button onClick={togglePlayPause}>
              <Image
                alt="play icon"
                src={isPlaying || videoRef.current.ended ? PlayIcon : PauseIcon}
              />
            </button>
            <S.VolumeContainer>
              <button onClick={toggleMuteVolume}>
                <Image
                  alt="volume icon"
                  src={volume === 0 ? VolumeMute : VolumeIcon}
                />
              </button>
              <S.VolumeRange
                type="range"
                max={1}
                min={0}
                step="any"
                value={volume}
                onChange={volumeChange}
                volume={true}
              />
            </S.VolumeContainer>
            {videoRef.current ? (
              <p>
                {" "}
                {(videoRef.current?.currentTime / 100).toFixed(2)} /{" "}
                {(videoRef.current?.duration / 100).toFixed(2)}
              </p>
            ) : (
              <p>00:00/00:00</p>
            )}
          </S.ControlsRight>
          <S.ControlsLeft>
            <button onClick={toggleFullScreen}>
              <Image
                alt="fullscreen icon"
                src={!isFullScreen ? FullScreenIcon : ExitFullScreenIcon}
              />
            </button>
          </S.ControlsLeft>
        </S.VideoControls>
      </S.ControlsContainer>
    </S.VideoContainer>
  );
}
