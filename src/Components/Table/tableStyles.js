import { createUseStyles } from "react-jss";

const tableStyles = createUseStyles({
    tableContainer: {
        maxWidth: (subjects) => subjects ? "80rem" :  "60rem",
        width: (subjects) => subjects ? "70rem" : "50rem",
        minWidth: (subjects) => subjects ? "60rem" : "40rem",
        marginTop: (subjects) => subjects ? "3rem" :  "1rem",
        border: "1px solid lightgray",
        borderRight: "none",
        borderBottom: "none",
        backgroundColor: "rgba(255, 255, 255, 0.75)",
        borderRadius: "15px",
    },
    tableHeader: {
        width: "100%",
        height: "4rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "left",
        backgroundColor: "rgba(255, 255, 255, 1)",
        borderTopLeftRadius: "15px",
        borderTopRightRadius: "15px",
    },
    tableItem: {
        width: "100%",
        height: "3rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "left",
    },
    bookName: {
        width: "40%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRight: "1px solid lightgray",
        borderBottom: "1px solid lightgray",
    },
    author: {
        width: "20%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRight: "1px solid lightgray",
        borderBottom: "1px solid lightgray",
    },
    latest: {
        width: "20%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRight: "1px solid lightgray",
        borderBottom: "1px solid lightgray",
    },
    first: {
        width: "20%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRight: "1px solid lightgray",
        borderBottom: "1px solid lightgray",
    },
    bold: {
        fontWeight: "500",
        fontSize: "1rem",
    },
    text: {
        overflowX: "hidden",
        textAlign: "left",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
    },
    loaderWrapper: {
        width: "100%",
        height: "20rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
    }
})

export default tableStyles