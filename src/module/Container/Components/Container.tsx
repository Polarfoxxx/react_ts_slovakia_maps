import React from "react";
import "../style/Container.style.css"

type Props = {
    children: JSX.Element | JSX.Element[]
}

function Container({ children }: Props): JSX.Element {

    return (
        <div className="container">
            {children}
        </div>
    )
}

export default Container