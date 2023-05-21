import React from "react"
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
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {cities.map((item: TypeCitesObject, index: number) => (
                    <tr 
                    className="tabRows"
                    style={{backgroundColor: item.select ? "orange" : "black"}}
                    key={index}
                    onClick={() => handleTable(item.mesto)}>
                        <td>{item.mesto}</td>
                        <td>{item.pocetObyvatelov}</td>
                        <td>{item.psc}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table