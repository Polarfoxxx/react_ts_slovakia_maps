import React from "react"
import "../style/Table.style.css"
import { Container } from "../../Container"
import { TypeCitesObject } from "../../Container/types"
import { TypeCitesArray } from "../../Container/types"



function Table(): JSX.Element {
    const tableReff = React.useRef<HTMLDivElement>(null)
    const cellReff = React.useRef<HTMLTableRowElement>(null)
    const { setCities, cities } = React.useContext(Container.Context)
    let newCityArray: TypeCitesArray = []

/* auto scrool by selecte */
    React.useEffect(() => {
        if (tableReff.current && cellReff.current) {
            const rowPosition = cellReff.current.offsetTop - tableReff.current.offsetTop;
            tableReff.current.scrollTop = rowPosition;
        }
    }, [cities])



    /* funkcia oznacenia mesta z JSONu..  */
    const handleTable = (id: string): void => {
        cities.forEach((item: TypeCitesObject) => {
            if (item.mesto === id) {
                item.select = true
            } else { item.select = false }
            newCityArray.push(item)
        })
        setCities(newCityArray)
    }

    return (
        <div className="tables"
            ref={tableReff}>
            <table
                className="tableBox">
                <thead className="tableHead">
                    <tr className="tableHeadBox">
                        <th className="tableHeadBoxTittle">City</th>
                        <th>Residents</th>
                        <th>Code</th>
                    </tr>
                </thead>
                <tbody className="tableBody">
                    {cities.map((item: TypeCitesObject, index: number) => (
                        <tr
                            ref={item.select ? cellReff : null}
                            className="tabRows"
                            style={{ backgroundColor: item.select ? "orange" : "black" }}
                            key={index}
                            onClick={() => handleTable(item.mesto)}>
                            <td className="block">{item.mesto}</td>
                            <td>{item.pocetObyvatelov}</td>
                            <td>{item.psc}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>

    );
}

export default Table