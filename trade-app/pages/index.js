import Head from "next/head";
import Image from "next/image";
import CryptoTracker from "./CryptoTracker";
import Logo from "../images/translogo.png";
import Stockcard from "../components/Stockcard";
import Cryptocard from "../components/Cryptocard";
import Newslayout from "../components/Newslayout";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Tradify - Keep track of stocks and crypto at the same place</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen  bg-[#eaf4fc]">
        {/* <div className="flex flex-col justify-center items-center">
           <img src='https://media.discordapp.net/attachments/1023253482058285126/1026494783516061697/20221003_193314_0000.png' alt="" className="w-96 h-96"/>
           <h1 className="text-2xl">Tradify</h1>
         </div> */}
        <div>
          <div>
            <div className="flex justify-center items-center">
              <h1 className="text-xl font-bold tracking-widest">
                Welcome to Tradify
              </h1>
            </div>
            <div className="flex flex-col justify-center items-center space-y-12">
              <div>
                <h1 className="text-xl font-bold">Services we provide</h1>
              </div>
              <Stockcard />
              <Cryptocard />
              <Newslayout />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  // bg-gradient-to-r from-[#000428] to-[#004e92]
}
