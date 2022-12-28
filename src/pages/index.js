import Head from "next/head";

import VideoPlayer from "../components/VideoPlayer/VideoPlayer";
import Playlist from "../components/Playlist/Playlist";

import MainContainer from "./style";

export default function Home() {
  return (
    <>
      <Head>
        <title>Direcao video app</title>
        <meta
          name="description"
          content="Direcao concursos- video app challenge"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer>
        <VideoPlayer />
        <Playlist />
      </MainContainer>
    </>
  );
}
