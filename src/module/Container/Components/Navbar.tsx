import React from "react"
import "../style/Navbar.style.css"

type Props = {
    setIndex: React.Dispatch<React.SetStateAction<number>>
    index: number
}

function Navbar({ setIndex, index }: Props): JSX.Element {
    /* funkcia pre zmenu indexu pre zmenu zobrazenia componentov */
    const handleChangeLayout = (event: React.MouseEvent<HTMLButtonElement>): void => {
        setIndex(prew => prew + 1)
        index === 2 && setIndex(0)
    }

    return (
        <div className="navbar">
            <div className="tittlePage">
                <h1>Slovakia Maps</h1>
            </div>
            <div className="modalForm">
                <button>Form comp</button>
            </div>
            <div className="changeDisplayCompBtn">
                <button
                    onClick={handleChangeLayout}>
                    change component
                </button>
            </div>
            <div className="laugueBtn">
                <button>cjange Langua</button>
            </div>
        </div>
    )
}

export default Navbar