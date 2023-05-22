import React from "react"
import "../style/Table.style.css"
import citiesJSON from "../../utils/cities.json"
import { Container } from "../../Container"
import { TypeCitesObject } from "../../Container/types"
import { TypeCitesArray } from "../../Container/types"



function Table(): JSX.Element {
    const { setCities, cities } = React.useContext(Container.Context)
    let newCityArray: TypeCitesArray = []

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
        <div className="tables">
            <table className="tableBox">
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