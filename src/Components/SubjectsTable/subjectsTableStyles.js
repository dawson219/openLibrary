import { createUseStyles } from "react-jss";

const subjectTableStyles = createUseStyles({
    booksContainer: {
        width: "calc(100%)",
        height: "100%",
    },
    bookTable: {
        width: "100%",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
    },
    back: {
        textDecoration: "none",
        border: "1px solid #00b4f8",
        color: "#00b4f8",
        padding: "0.4rem 1rem",
        margin: "1rem 0 0 1rem",
        borderRadius: "8px",
        cursor: "pointer",
        height: "2rem",
        width: "6rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        
        "&:hover": {
            backgroundColor: "#00b4f8",
            color: "white",
        },
    },
    title: {
        fontWeight: "600",
        fontSize: "2rem",
    }
})

export default subjectTableStyles