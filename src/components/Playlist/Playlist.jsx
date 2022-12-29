import { VideoArray } from "../../utils/data/data";
import { useCallback, useState } from "react";
import Image from "next/image";

import * as S from "./style";

export default function Playlist() {
  const [videos, setVideos] = useState(VideoArray);

  const sortByName = () => {
    const newVideoArray = [...VideoArray].sort((a, b) =>
      a.nome.localeCompare(b.nome)
    );
    setVideos(newVideoArray);
  };

  const renderVideos = useCallback(
    () =>
      videos.map((video) => (
        <div
          key={video.nome}
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          <div>
            <Image alt="video thumb" src={video.poster} />
          </div>
          <div style={{ width: "50%" }}>
            <h2>{video.nome}</h2>
            <p>Duracao: {video.duration}</p>
            <p>Rating: {video.rating}</p>
          </div>
        </div>
      )),
    [videos]
  );

  return (
    <S.Container>
      <button onClick={sortByName}>A-Z</button>
      <div>{renderVideos()}</div>
    </S.Container>
  );
}
