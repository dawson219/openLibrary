import React, { useEffect, useState } from "react";
import subjectTableStyles from "./subjectsTableStyles";
import Table from "../Table/Table";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import axios from "axios";

const parseName = (name) => {
    name = name.replace(" ", "_")
    name = name.replace("%20", "_")

    return name?.toLowerCase()
}

const ParsePercent = (name) => {
  name = name.replace("%20", " ")

  return name?.toLowerCase()
}

const SubjectsTable = () => {
  const classes = subjectTableStyles();
  const { name } = useParams();
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([]);

  const fetchSubjects = async (key) => {
    try {
      const headers = {
        "Content-Type": "application/json",
      };
      const url = `https://openlibrary.org/subjects/${key}.json`;

      setLoading(true)
      const res = await axios.get(url, {
        headers: headers,
        params: { limit: 10 },
      });

      if (res.data) {
        setData(res.data.works);
      }
    } catch (err) {
      console.log(err);
    }
    finally{
        setLoading(false)
    }
  };

  useEffect(() => {
    if(loading)return
    fetchSubjects(parseName(name));
  }, []);

  return (
    <div className={classes.booksContainer}>
      <Link to={"/"} className={classes.back}>
        Home
      </Link>
      <div className={classes.title}>
        Top 10 Books on {ParsePercent(name)}
      </div>
      <div className={classes.bookTable}>
        <Table loading={loading} subjects={true} data={data} />
      </div>
    </div>
  );
};

export default SubjectsTable;
