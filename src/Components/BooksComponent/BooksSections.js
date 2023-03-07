import React, { useEffect, useState } from "react";
import bookStyles from "./booksSectionStyles";
import SearchBar from "../SearchBar/SearchBar";
import TableBook from "../TableBook/TableBook";
import Pagination from "../Pagination/Pagination";
import axios from "axios";
import image from "../../Assets/books.png";

const parseName = (name) => {
  // name = name.replace(" ", "+")
  name = name.replace("%20", " ");

  return name?.toLowerCase();
};

const BooksSections = () => {
  const classes = bookStyles();
  const [value, setValue] = useState("");
  const [page, setPage] = useState(0);
  const [apiPage, setApiPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBooks = async (firstCall) => {
    try {
      const headers = {
        "Content-Type": "application/json",
      };
      const url = `https://openlibrary.org/search.json`;

      setLoading(true);
      const res = await axios.get(url, {
        headers: headers,
        params: { q: parseName(value), limit: 10, offset: page * 10 },
      });

      if (res.data) {
        if (firstCall) {
          setApiPage(1);
        } else {
          setApiPage(apiPage + 1);
        }
        if (firstCall) {
          setPage(0);
          setHasMore(true);
        }
        if (res.data.docs.length < 10) {
          setHasMore(false);
        }
        if (firstCall) {
          setData(res.data.docs);
        } else setData([...data, ...res.data.docs]);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (value?.length <= 0) return;
    if (loading) return;
    if (page === apiPage) fetchBooks(false);
  }, [page]);

  return (
    <div className={classes.booksContainer}>
      <div className={classes.searchWrapper}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if(value?.length <= 0)return
            fetchBooks(true);
          }}
          action=""
          className={classes.form}
        >
          <SearchBar
            value={value}
            setValue={setValue}
            placeholder={"Search Books by Title or by Author"}
          />
        </form>
        <div
          className={classes.search}
          onClick={() => {
            if(value?.length <= 0)return
            fetchBooks(true);
          }}
        >
          Search
        </div>
      </div>
      {data?.length <= 0 && !loading ? (
        <div className={classes.blankWrapper}>
          <div className={classes.blankui}>
            <img src={image} className={classes.blankImage} alt="" />
            <div className={classes.text}>
              Search for a book or subject using the search-bar
            </div>
          </div>
        </div>
      ) : (
        <>
          <Pagination
            loading={loading}
            page={page}
            setPage={setPage}
            hasMore={hasMore}
          />
          <div className={classes.bookTable}>
            <TableBook page={page} data={data} loading={loading} />
          </div>
        </>
      )}
    </div>
  );
};

export default React.memo(BooksSections);
