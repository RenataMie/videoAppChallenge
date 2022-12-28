import styled from "styled-components";

export const VideoContainer = styled.div`
  position: relative;
  width: 90%;
  max-width: 1000px;
  display: flex;
  justify-content: center;
  background: black;
  margin-inline: auto;
`;

export const Video = styled.video`
  width: 100%;
`;

export const ControlsContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  color: white;
  z-index: 2;
`;

export const VideoTimeLine = styled.input`
  width: 99%;
  -webkit-appearance: none;
  --thumb-height: 1.14em;
  --track-height: 0.125em;
  --track-color: rgba(0, 0, 0, 0.2);
  --brightness-hover: 180%;
  --brightness-down: 80%;
  --clip-edges: 0.125em;
  background: transparent;
  overflow: hidden;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    --thumb-radius: calc((var(--thumb-height) * 0.5) - 1px);
    --clip-top: calc((var(--thumb-height) - var(--track-height)) * 0.5 - 0.5px);
    --clip-bottom: calc(var(--thumb-height) - var(--clip-top));
    --clip-further: calc(100% + 1px);
    --box-fill: calc(-100vmax - var(--thumb-width, var(--thumb-height))) 0 0
      100vmax red;
    box-shadow: var(--box-fill);
    border-radius: var(--thumb-width, var(--thumb-height));
    filter: brightness(100%);
    clip-path: polygon(
      100% -1px,
      var(--clip-edges) -1px,
      0 var(--clip-top),
      -100vmax var(--clip-top),
      -100vmax var(--clip-bottom),
      0 var(--clip-bottom),
      var(--clip-edges) 100%,
      var(--clip-further) var(--clip-further)
    );
    opacity: 1;
    border: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: red;
    cursor: pointer;
  }

  &::-webkit-slider-runnable-track {
    background: linear-gradient(var(--track-color) 0 0) scroll no-repeat center /
      100% calc(var(--track-height) + 1px);
  }
`;

export const VideoControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    border: none;
    background: none;
    cursor: pointer;
  }
`;

export const ControlsRight = styled.div`
  display: flex;
`;

export const ControlsLeft = styled.div`
  display: flex;
`;

export const VolumeRange = styled.input`
  width: 0;
  -webkit-appearance: none;
  --thumb-height: 1.14em;
  --track-height: 0.125em;
  --track-color: rgba(0, 0, 0, 0.2);
  --brightness-hover: 180%;
  --brightness-down: 80%;
  --clip-edges: 0.125em;
  background: transparent;
  overflow: hidden;
  transform-origin: left;
  transform: scaleX(0);
  transition: width 550ms ease-in-out, transform 550ms ease-in-out;
  position: relative;
  bottom: 5px;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    --thumb-radius: calc((var(--thumb-height) * 0.5) - 1px);
    --clip-top: calc((var(--thumb-height) - var(--track-height)) * 0.5 - 0.5px);
    --clip-bottom: calc(var(--thumb-height) - var(--clip-top));
    --clip-further: calc(100% + 1px);
    --box-fill: calc(-100vmax - var(--thumb-width, var(--thumb-height))) 0 0
      100vmax white;
    box-shadow: var(--box-fill);
    border-radius: var(--thumb-width, var(--thumb-height));
    filter: brightness(100%);
    clip-path: polygon(
      100% -1px,
      var(--clip-edges) -1px,
      0 var(--clip-top),
      -100vmax var(--clip-top),
      -100vmax var(--clip-bottom),
      0 var(--clip-bottom),
      var(--clip-edges) 100%,
      var(--clip-further) var(--clip-further)
    );
    opacity: 1;
    border: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: white;
    cursor: pointer;
  }

  &::-webkit-slider-runnable-track {
    background: linear-gradient(var(--track-color) 0 0) scroll no-repeat center /
      100% calc(var(--track-height) + 1px);
  }
`;

export const VolumeContainer = styled.div`
  position: relative;
  top: 5px;

  &:hover ${VolumeRange} {
    width: 50%;
    transform: scaleX(1);
  }
`;
