import React from "react";
import tableStyles from "./tableStyles";
import Loader from "../Loader/Loader";

const TableBook = ({ subjects, data, page, loading }) => {
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
        data.slice(page * 10, page * 10 + 10)?.map((book) => {
          return (
            <div className={classes.tableItem} key={book.key}>
              <div className={`${classes.bookName}`}>
                <div className={classes.text}>{book.title}</div>
              </div>
              <div className={`${classes.author}`}>
                <div className={classes.text}>
                  {book.author_name ? book.author_name[0] : "Unknown"}
                </div>
              </div>
              <div className={`${classes.latest}`}>
                <div className={classes.text}>
                  {book.publish_year?.length > 0
                    ? book.publish_year.sort()[book.publish_year.length - 1]
                    : book.first_publish_year ?? "Unknown"}
                </div>
              </div>
              <div className={`${classes.first}`}>
                <div className={classes.text}>{book.first_publish_year ?? "Unknown"}</div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default TableBook;
