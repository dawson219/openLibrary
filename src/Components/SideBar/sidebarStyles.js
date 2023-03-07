import {createUseStyles} from "react-jss"

const sidebarStyles = createUseStyles({
    sidebarWrapper: {
        minWidth: "20rem",
        maxWidth: "20rem",
        height: "100%",
        borderRight: "2px solid white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.75)"
    },
    title: {
        fontWeight: 600,
        width: "100%",
        height: "3rem",
        fontSize: "1.2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
    },
    form: {
        width: "100%",
    },
    subjectList: {
        width: "100%",
    },
    listItem: {
        width: "calc(100% - 2rem)",
        height: "2rem",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 1rem",
        textDecoration: "none",
        color: "black",

        "&:hover": {
            backgroundColor: "white",
            borderRadius: "5px",
        }
    },
    search: {
        width: "calc(100% - 2.2rem)",
        height: "2.5rem",
        margin: "0.5rem 0",
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

export default sidebarStyles