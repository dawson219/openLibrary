import React from "react";
import tableStyles from "./tableStyles";
import Loader from "../Loader/Loader";

const Table = ({ subjects, data, loading }) => {
  const classes = tableStyles(subjects);
  return (
    <div className={classes.tableContainer}>
      <div className={classes.tableHeader}>
        <div className={`${classes.bookName} ${classes.bold}`}>
          Title And Sub Title
        </div>
        <div className={`${classes.author} ${classes.bold}`}>Author</div>
        <div className={`${classes.latest} ${classes.bold}`}>
          Latest Publish Year
        </div>
        <div className={`${classes.first} ${classes.bold}`}>
          First Publish Year
        </div>
      </div>
      {loading ? (
        <div className={classes.loaderWrapper}>
          <Loader
            h={"5rem"}
            w={"5rem"}
            b={"1rem"}
            bk={"gray"}
            clr={"white"}
            t="1s"
          />
        </div>
      ) : (
        data?.map((book) => {
          return (
            <div className={classes.tableItem} key={book.key}>
              <div className={`${classes.bookName}`}>
                <div className={classes.text}>{book.title}</div>
              </div>
              <div className={`${classes.author}`}>
                <div className={classes.text}>{book.authors[0].name}</div>
              </div>
              <div className={`${classes.latest}`}>
                <div className={classes.text}>{book.first_publish_year}</div>
              </div>
              <div className={`${classes.first}`}>
                <div className={classes.text}>{book.first_publish_year}</div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Table;
