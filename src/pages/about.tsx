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
      <main className="flex min-h-screen flex-col items-center justify-center bg-stone-700 font-mono">
        <div id="centerText" className="absolute m-auto text-center text-2xl text-slate-50">
          <h1 className="mb-6">
            <span className="underline font-semibold">Billy Jones</span><br />
            <span className="text-orange-400">Software Developer</span>
          </h1>
          <p className="text-sm lg:text-lg w-2/3 m-auto">
            I&apos;m an ambitious software developer who mainly focuses on <span className="text-orange-400">C# .NET</span>.<br/>
            I have also been working a lot on website development, namely this site using <Link className="text-orange-400 underline hover:text-orange-600 hover:no-underline" href="https://create.t3.gg/" target="_blank">Create T3-App</Link> and another project <Link className="text-orange-400 underline hover:text-orange-600 hover:no-underline" href="https://github.com/Hellcat404/EMotional">&ldquo;EMotional&rdquo;</Link>.<br/>
            My skills include <span className="text-orange-400">C# .Net, React/NextJS, Java, C++, Lua, Python</span> and I have a willingness and drive to learn more if the opportunity presents itself.
          </p>
        </div>
        <div className="absolute bottom-10 lg:bottom-20">
        <Link className="block text-xl lg:text-3xl text-orange-400 underline hover:no-underline hover:text-orange-600 hover:scale-110 transition-all" href="/">⬅ Back</Link>
        </div>
      </main>
    </>
  );
};

export default Home;
