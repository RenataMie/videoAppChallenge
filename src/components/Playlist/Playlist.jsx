import { VideoArray } from "../../utils/data/data";
import { useCallback, useState } from "react";
import Image from "next/image";

import * as S from "./style";

export default function Playlist() {
  const [videos, setVideos] = useState(VideoArray);

  const sortVideos = (propertyName) => {
    const newArray = [...VideoArray].sort((a, b) =>
      a[propertyName].localeCompare(b[propertyName])
    );
    setVideos(newArray);
  };

  const renderVideos = useCallback(
    () =>
      videos.map((video) => (
        <S.VideoContainer key={video.name}>
          <div>
            <Image alt="video thumb" src={video.poster} />
          </div>
          <S.VideoProperties>
            <h2>{video.name}</h2>
            <p>Duração: {video.duration}</p>
            <p>Rating: {video.rating}</p>
          </S.VideoProperties>
        </S.VideoContainer>
      )),
    [videos]
  );

  return (
    <S.Container>
      <S.FilterButton onClick={() => sortVideos("name")}>A-Z</S.FilterButton>
      <S.FilterButton onClick={() => sortVideos("duration")}>
        {" "}
        Duração
      </S.FilterButton>
      <S.FilterButton onClick={() => sortVideos("rating")}>
        Rating
      </S.FilterButton>
      <div>{renderVideos()}</div>
    </S.Container>
  );
}
