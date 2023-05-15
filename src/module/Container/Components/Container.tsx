import React from "react";
import "../style/Container.style.css"
import { Navbar } from "../"
import { Maps } from "../../Maps";
import { Table } from "../../Table";



function Container(): JSX.Element {
    const [index, setIndex] = React.useState(2)

    let components: JSX.Element | JSX.Element[] = []

    /* podmienka pre prepinanie zobrazenia componentov */
    if (index === 0) {
        components = <Maps />
    } else if (index === 1) {
        components = <Table />
    } else if (index === 2) {
        components = [<Table />, <Maps />]
    }




    return (
        <div className="container">
            <div className="containerNavbar">
                <Navbar
                    setIndex={setIndex}
                    index={index}
                />
            </div>
            <div className="containerContent">
                {components}
            </div>
        </div>
    )
}

export default Container