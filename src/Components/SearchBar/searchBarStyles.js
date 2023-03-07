import { createUseStyles } from "react-jss";

export const searchBarStyles = createUseStyles({
    container: {
        width: "calc(100% - 2.2rem)",
        padding: "0.1rem 1rem",
        height: "2.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "left",
        border: "1px solid lightgray",
        borderRadius: "6px",
        position: "relative",
        margin: "0 1rem",
        maxWidth: "25rem",
        backgroundColor: "white",
    },
    searchIcon: {
        marginRight: "0.6rem",
    },
    searchInput: {
        width: "100%",
        height: "100%",
        outline: "none",
        border: "none",
    },
    cross: {
        width: "1rem",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.1rem",
        cursor: "pointer",
        fontWeight: "500",
        opacity: "0.6",
        color: "rgba(51, 51, 51, 1)",
        backgroundColor: "white",
    },
})