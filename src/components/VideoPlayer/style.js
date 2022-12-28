import styled, { css } from "styled-components";

export const VideoContainer = styled.div`
  position: relative;
  // width: 100%;
  max-width: 2000px;
  display: flex;
  justify-content: center;
  background: black;
  margin-inline: auto;

  ${(props) =>
    props.theater &&
    css`
      max-width: initial;
      width: 100%;
      max-height: 90vh;
    `}
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

  //styling for Firefox

  ::-moz-range-track,
  ::-moz-range-thumb {
    appearance: none;
    transition: all ease 100ms;
    height: var(--thumb-height);
  }

  ::-moz-range-track,
  ::-moz-range-thumb,
  ::-moz-range-progress {
    background: red;
  }

  ::-moz-range-thumb {
    background: red;
    border: 0;
    width: var(--thumb-width, var(--thumb-height));
    border-radius: var(--thumb-width, var(--thumb-height));
    cursor: grab;
  }

  :active::-moz-range-thumb {
    cursor: grabbing;
  }

  ::-moz-range-track {
    width: 100%;
    background: var(--track-color);
  }

  ::-moz-range-progress {
    appearance: none;
    background: red;
    transition-delay: 30ms;
  }

  ::-moz-range-track,
  ::-moz-range-progress {
    height: calc(var(--track-height) + 1px);
    border-radius: var(--track-height);
  }

  ::-moz-range-thumb,
  ::-moz-range-progress {
    filter: brightness(100%);
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

export const VolumeRange = styled(VideoTimeLine)`
  width: 0;
  transform-origin: left;
  transform: scaleX(0);
  transition: width 550ms ease-in-out, transform 550ms ease-in-out;
  position: relative;
  bottom: 5px;

  &::-webkit-slider-thumb {
    --box-fill: calc(-100vmax - var(--thumb-width, var(--thumb-height))) 0 0
      100vmax white;
    background: white;
  }

  ::-moz-range-thumb {
    background: white;
  }

  ::-moz-range-progress {
    background: white;
  }
`;

export const VolumeContainer = styled.div`
  display: none;
  position: relative;
  top: 5px;

  &:hover ${VolumeRange} {
    width: 50%;
    transform: scaleX(1);
  }

  @media only screen and (min-width: 1024px) {
    display: block;
  }
`;
