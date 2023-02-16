import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Billy Jones - Software Developer</title>
        <meta name="description" content="Billy Jones' personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-stone-700">
        <div id="centerText" className="absolute m-auto font-mono text-center text-2xl text-slate-50">
          <h1 className="mb-6">
            <span className="underline font-semibold">Billy Jones</span><br />
            <span className="text-orange-400">Software Developer</span>
          </h1>
          <Link className="block m-2 hover:text-slate-400" href="https://github.com/Hellcat404" target="_blank">GitHub</Link>
          <Link className="block m-2 hover:text-slate-400" href="https://www.linkedin.com/in/billyjones132/" target="_blank">LinkedIn</Link>
        </div>
      </main>
    </>
  );
};

export default Home;
