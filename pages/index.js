import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Exploration Hike</title>
      </Head>
      <div className="relative h-screen bg-cover bg-center bg-[url('/images/exploration.png')]">
        Hello world!
      </div>
    </>
  );
}
