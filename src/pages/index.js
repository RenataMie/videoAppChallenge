import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../../styles/Home.module.css";

import VideoPlayer from "../components/VideoPlayer/VideoPlayer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const toggleVideo = () => {
    console.log("aaa");
  };
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
      <main className={styles.main}>
        <div className={styles.center}>
          <VideoPlayer />
        </div>
      </main>
    </>
  );
}
