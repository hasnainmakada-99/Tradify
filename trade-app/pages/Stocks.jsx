import React, { useEffect } from "react";
import { CryptoState } from "../AppContext";
import Searchstock from "../components/Searchstock";
import Stocktable from "../components/Stocktable";
import Image from "next/image";
import withAuth from "../withAuth";
const Stocks = () => {
  const {
    ListStocks,
    company,
    exchange,
    setcompany,
    setexchange,
    SearchStock,
    searchres,
    change,
  } = CryptoState();
  useEffect(() => {
    ListStocks();
  }, []);

  return (
    <div className="flex flex-col ">
      <div className="w-full">
        <div className="flex flex-col justify-center items-center space-y-6 bg-[#9FE2BF] md:p-20 p-5">
          <div>
            <h1 className="text-2xl font-bold  italic md:text-4xl">Stocks Montringing</h1>
          </div>
          <div className="flex  flex-col justify-center items-center space-y-6 p-5 md:flex-row md:space-y-0  md:space-x-6">
          <input
            type="text"
            placeholder="Enter the company name"
            value={company}
            onChange={(e) => {
              setcompany(e.target.value);
            }}
            className="bg-[#232B2B] text-white rounded-md outline-none p-2 placeholder:text-white"
          />
          <input
            type="text"
            placeholder="Enter the name of exchange"
            value={exchange}
            onChange={(e) => {
              setexchange(e.target.value);
            }}
            className="bg-[#232B2B] text-white rounded-md outline-none p-2 placeholder:text-white"
          />
          </div>
          <div>
            <button onClick={SearchStock} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 border border-blue-700 rounded">Search</button>
          </div>
        </div>
      </div>
      <div>{change ? <Searchstock /> : <Stocktable />}</div>
    </div>
  );
};

export default  withAuth(Stocks);
