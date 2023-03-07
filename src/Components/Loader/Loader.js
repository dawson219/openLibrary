import React from "react"
import "./Loader.css"

const Loader = ({ h, w, b, clr, bk, t, style}) => {
    return (
        <div
            className={`loader`}
            style={{
                height: h,
                width: w,
                border: `${b} solid ${bk}`,
                borderTopColor: clr,
                borderBottomColor: clr,
                animationDuration: t,
                ...style,
            }}
        ></div>
    )
}

export default Loader