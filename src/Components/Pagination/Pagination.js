import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  paginationDiv: {
    width: "calc(100vw - 20rem)",
    height: "4rem",
    marginTop: "1rem",
    paddingRight: "2rem"
  },
  buttonConatiner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
    width: "12rem",
    marginLeft: "auto",
  },
  prev: {
    border: "1px solid #00b4f8",
    color: "#00b4f8",
    padding: "0.4rem 1rem",
    borderRadius: "5px",
    cursor: "pointer",
    backgroundColor: "white",

    "&:hover": {
      backgroundColor: "#00b4f8",
      color: "white",
    },
  },
  next: {
    border: "1px solid #00b4f8",
    color: "#00b4f8",
    borderRadius: "5px",
    padding: "0.4rem 1rem",
    cursor: "pointer",
    backgroundColor: "white",

    "&:hover": {
      backgroundColor: "#00b4f8",
      color: "white",
    },
  },
  inactive: {
    border: "1px solid gray",
    color: "gray",
    cursor: "not-allowed",
    backgroundColor: "white",

    "&:hover": {
      backgroundColor: "white",
      color: "gray",
    },
  },
});

const Pagination = ({ page, setPage, hasMore, onNext, onPrevious, loading }) => {
  const classes = useStyles();
  return (
    <div className={classes.paginationDiv}>
      <div className={classes.buttonConatiner}>
        <div
          onClick={() => {
            if (page === 0 || loading) return;
            setPage(page - 1);
          }}
          className={`${classes.prev} ${page === 0 && classes.inactive}`}
        >
          Previous
        </div>
        <div
          onClick={() => {
            if (!hasMore || loading) return;
            setPage(page + 1);
          }}
          className={`${classes.next} ${!hasMore && classes.inactive}`}
        >
          Next
        </div>
      </div>
    </div>
  );
};

export default Pagination;
