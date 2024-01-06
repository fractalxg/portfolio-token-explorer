import "./SearchBar.css";
import { IoMdSearch } from "react-icons/io";
import { useState } from "react";
import axios from "axios";

const SearchBar = ({ selectedChain, setApiResponse }) => {
  const [input, setInput] = useState("");

  const chainRouter = () => {
    if (selectedChain == "Binance") {
      const BINANCE_SERVER = import.meta.env.VITE_BINANCE_API_SERVER;
      return BINANCE_SERVER;
    }
    if (selectedChain == "Ethereum") {
      const ETHEREUM_SERVER = import.meta.env.VITE_ETHEREUM_API_SERVER;
      return ETHEREUM_SERVER;
    }
  };

  const getChainRouterResponse = async (value) => {
    const response = await axios.get(chainRouter() + value);
    setInput([response.data]);
    console.log([response.data])
  };

  const handleChange = (value) => {
    getChainRouterResponse(value)
  };

  return (
    <div className="container">
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search something..." 
          onChange={(e) => handleChange(e.target.value)}
        ></input>
        <IoMdSearch className="search-icon" />
      </div>
    </div>
  );
};

export default SearchBar;