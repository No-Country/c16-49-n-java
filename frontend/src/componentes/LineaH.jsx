import React from "react";

function LineaH(props) {
    return (
        <>
            <hr
                style={{
                    backgroundColor: props.color,
                    width: props.width,
                    height: '1px',
                    border: "none",
                    marginBottom: '20px'
                }}
            />
        </>
    )
}
export default LineaH;