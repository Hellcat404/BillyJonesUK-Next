import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import portrait from '../../public/portrait.jpeg';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Billy Jones - Software Developer</title>
        <meta name="description" content="Billy Jones' personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-stone-700 font-mono">
      <Image className="absolute border-orange-400 border rounded-full m-auto top-5 lg:top-32 shadow overflow-clip text-center" src={portrait} width={192} height={192} alt="Billy Jones portrait" />
        <div id="centerText" className="absolute m-auto text-center text-2xl text-slate-50">
          <h1 className="mb-6">
            <span className="text-3xl font-bold">Billy Jones</span><br />
            <span className="text-orange-400">Software Developer</span>
          </h1>
          <Link className="block m-2 underline hover:no-underline hover:text-slate-400 hover:scale-110 transition-all" href="https://github.com/Hellcat404" target="_blank">GitHub</Link>
          <Link className="block m-2 underline hover:no-underline hover:text-slate-400 hover:scale-110 transition-all" href="https://www.linkedin.com/in/billyjones132/" target="_blank">LinkedIn</Link>
          <Link className="block m-2 underline hover:no-underline hover:text-slate-400 hover:scale-110 transition-all" href="mailto: billy@billyjones.uk" target="_blank">billy@billyjones.uk</Link>
        </div>
        <div className="absolute bottom-10 lg:bottom-20">
          <Link className="block text-xl lg:text-3xl text-orange-400 underline hover:no-underline hover:text-orange-600 hover:scale-110 transition-all" href="about">About Me ➡</Link>
        </div>
      </main>
    </>
  );
};

export default Home;
