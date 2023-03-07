import {createUseStyles} from "react-jss"

const bookStyles = createUseStyles({
    booksContainer: {
        width: "calc(100% - 20rem)",
        height: "100%",
    },
    searchWrapper: {
        height: "5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "left",
        // borderBottom: "2px solid gray",
        backgroundColor: "rgba(255, 255, 255, 0.75)"
    },
    form: {
        width: "27rem",
    },
    bookTable: {
        width: "100%",
        height: "calc(100% - 10rem)",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
    },
    blankWrapper: {
        width: "100%",
        height: "calc(100% - 10rem)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    blankui: {
        height: "30rem",
        width: "50rem",
        backgroundColor: "rgba(255, 255, 255, 0.75)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50px",
    },
    blankImage: {
        height: "15rem",
        width: "15rem",
    },
    text: {
        fontSize: "2rem",
        fontWeight: "700",
        color: "rgba(30, 30, 30, 0.7)"
    },
    search: {
        width: "5rem",
        height: "2.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#00b4f8",
        borderRadius: "8px",
        color: "white",
        fontWeight: "400",
        cursor: "pointer",
    }
})

export default bookStyles