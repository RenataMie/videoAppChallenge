import * as S from "./style";
import { VideoArray } from "../../utils/data/data";

export default function Playlist() {
  console.log(VideoArray);
  return (
    <S.Container>
      LISTA DE VIDEOS
      <div>{VideoArray.map((video) => video.nome)}</div>
    </S.Container>
  );
}
