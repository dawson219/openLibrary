import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import sidebarStyles from "./sidebarStyles";
import { Link, useNavigate } from "react-router-dom";

let list = ["Javascript", "Harry Potter", "Indian History", "Crypto Currency", "Criminal Law"]

const Sidebar = () => {
    const classes = sidebarStyles()
  const [value, setValue] = useState("");
  const navigate = useNavigate()
  return (
    <div className={classes.sidebarWrapper}>
      <div className={classes.title}>Trending Subjects</div>
      <form
        action=""
        onSubmit={(e) => {
            e.preventDefault()
            if(value?.length <= 0)return
            navigate(`/subject/${value}`)
        }}
        className={classes.form}
      >
        <SearchBar
          value={value}
          setValue={setValue}
          placeholder="Search Subjects"
        />
      </form>
        <div
          className={classes.search}
          onClick={() => {
            if(value?.length <= 0)return
            navigate(`/subject/${value}`)
          }}
        >
          Search
        </div>
      <div className={classes.subjectList}>
        {
            list.map((item) => {
                return (
                  <Link to={`/subject/${item}`} className={classes.listItem}>{item}</Link>
                )
            })
        }
      </div>
    </div>
  );
};

export default Sidebar;
