import React from "react";
import { searchBarStyles } from "./searchBarStyles";
import { ReactComponent as Search } from "../../Assets/Search.svg";

const SearchBar = ({
  value,
  setValue,
  placeholder,
  changeFunc,
}) => {
  const classes = searchBarStyles();

  return (
    <div className={classes.container}>
      <Search className={classes.searchIcon} />
      <input
        type="text"
        placeholder={placeholder}
        className={classes.searchInput}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <div
        className={classes.cross}
        onClick={() => {
          setValue("");
        }}
      >
        {value?.length > 0 && "x"}
      </div>
    </div>
  );
};

export default React.memo(SearchBar);
