import "./SearchComboBox.css";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import {
  handleClearInput,
  focusSearchInput,
} from "../utils/ComponentsVisibility";

const SearchComboBox = ({ setSelectedChain, setVisible, setListVisible }) => {
  const [chainSelection, setChainSelection] = useState("Binance");
  const [visibleSelection, setVisibleSelection] = useState(false);

  const selectedChain = (chain) => {
    setChainSelection(chain);
    setVisibleSelection(!visibleSelection);
    handleClearInput();
    setSelectedChain(chain);
    setVisible(false)
    setListVisible(false)
    focusSearchInput();
  };

  const selectionDropDown = () => {
    setVisibleSelection(!visibleSelection);
  };

  const selectedChainLabel = () => {
    return chainSelection === "Binance" ? "Ethereum" : "Binance";
  };

  return (
    <div className="search-box-container">
      <p onClick={() => selectionDropDown()} className="selected">
        {chainSelection} <IoIosArrowDown className="arrow-icon" />
      </p>
      {visibleSelection && (
        <div className="selection">
          <p onClick={() => selectedChain(selectedChainLabel)}>
            {selectedChainLabel()}
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchComboBox;
