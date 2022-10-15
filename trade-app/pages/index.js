import Head from "next/head";
import Image from "next/image";
import CryptoTracker from "./CryptoTracker";
import Logo from "../images/translogo.png";
import Stockcard from "../components/Stockcard";
import Cryptocard from "../components/Cryptocard";
import Newslayout from "../components/Newslayout";
import { CryptoState } from "../AppContext";
export default function Home() {
  const {mode} = CryptoState()
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`min-h-screen ${mode === 'light' ? 'bg-[#eaf4fc]' : 'bg-black'}`}>
        <div className="flex flex-col">
          <div>
            <div className="flex justify-center items-center h-72 bg-[#4c268f]">
              <h1 className="text-3xl font-bold  italic text-[#99eeb4] md:text-5xl">
                Welcome to Tradify
              </h1>
            </div>
            <div className="flex flex-col justify-center items-center space-y-12 mt-10 p-3 md:space-y-24">
              <div className="">
                <h1 className={`text-2xl font-bold italic underline md:text-3xl ${mode === 'light'? 'text-black':'text-white'}`}>
                  Services we provide
                </h1>
              </div>
              <div className="flex flex-col space-y-11 cursor-pointer md:flex-row md:space-y-0 md:space-x-20">
                <Stockcard />
                <Cryptocard />
                <Newslayout />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  // bg-gradient-to-r from-[#000428] to-[#004e92]
}
