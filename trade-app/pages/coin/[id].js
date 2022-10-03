import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CryptoState } from "../../AppContext";
import { SingleCoin } from "../../utils/endpoints";
import ReactHtmlParser from "react-html-parser";
import { numberWithCommas } from "../../components/Cointable";
import Coininfo from "../../components/Coininfo";
const Post = () => {
  //   const router = useRouter()
  //   const { slug } = router.query
  const { query } = useRouter();
  const [coin, setcoin] = useState();
  const { currency, symbol } = CryptoState();

  const fetchcoin = async () => {
    const { data } = await axios.get(SingleCoin(query.id));

    setcoin(data);
  };

  useEffect(() => {
    fetchcoin();
  }, []);

  console.log(coin);

  if (!coin) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <div className="flex flex-col space-y-14">
        <div className="flex flex-col justify-center space-y-5">
          <div className="flex flex-col justify-center items-center space-y-5">
            <div>
              <img src={coin?.image.large} alt="" />
            </div>
            <div className="flex flex-col text-center space-y-2">
              <h1 className="text-3xl font-bold">{coin?.name}</h1>
              <div className="text-center w-fit font-semibold break-words">
                <p>{ReactHtmlParser(coin?.description.en.split(". ")[0])}.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex space-x-2 text-lg font-bold">
              <h1>RANK:</h1>
              <p>{coin?.market_cap_rank}</p>
            </div>
            <div className="flex space-x-2 text-lg font-bold">
              <h1>CURRENT PRICE:</h1>
              <p>{symbol}
                {numberWithCommas(
                  coin?.market_data.current_price[currency.toLowerCase()]
                )}</p>
            </div>
            <div className="flex space-x-2 text-lg font-bold">
              <h1>MARKET CAP:</h1>
              <p>{symbol}
                {numberWithCommas(
                  coin?.market_data.market_cap[currency.toLowerCase()]
                    .toString()
                    .slice(0, -6)
                )}
                M</p>
            </div>
          </div>
        </div>
        <div className="">
          <Coininfo coin={coin}/>
        </div>
      </div>
    </div>
  );
};

export default Post;
