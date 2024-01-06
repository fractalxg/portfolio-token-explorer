import "./SearchComboBox.css";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const SearchComboBox = ({setSelectedChain}) => {
  const [chainSelection, setChainSelection] = useState("Binance");
  const [visible, setVisible] = useState(false);

  const selectedChain = (chain) => {
    setChainSelection(chain);
    setVisible(!visible);
    setSelectedChain(chain)
  };

  const selectionDropDown = () => {
    setVisible(!visible);
  };

  return (
    <div className="search-box-container">
      <p onClick={() => selectionDropDown()} className="selected">
        {chainSelection} <IoIosArrowDown className="arrow-icon" />
      </p>
      {visible && (
        <div className="selection">
          <p onClick={() => selectedChain("Binance")}>Binance</p>
          <p onClick={() => selectedChain("Ethereum")}>Ethereum</p>
        </div>
      )}
    </div>
  );
};

export default SearchComboBox;
