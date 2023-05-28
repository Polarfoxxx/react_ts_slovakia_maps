import React from "react"
import "../style/Table.style.css"
import { Container } from "../../Container"
import { TypeCitesObject } from "../../utils/types"
import { useTranslation } from "react-i18next"
import "../../utils/i18n"
import servicesObjectDesignationFromJSON from "../services/services"

function Table(): JSX.Element {
    const tableReff = React.useRef<HTMLDivElement>(null)
    const cellReff = React.useRef<HTMLTableRowElement>(null)
    const { setCities, cities } = React.useContext(Container.Context)
    const { t } = useTranslation()

    /* auto scrool by selecte */
    React.useEffect(() => {
        if (tableReff.current && cellReff.current) {
            const rowPosition = cellReff.current.offsetTop - tableReff.current.offsetTop;
            tableReff.current.scrollTop = rowPosition;
        }
    }, [cities])

    /* funkcia oznacenia mesta z JSONu..  */
    const handleTable = (cities: string, e: React.MouseEvent<HTMLElement>): void => {
        const eventType = e.currentTarget.id
        setCities(servicesObjectDesignationFromJSON.designationOfTheCityInJSON(cities, eventType))
    }

    return (
        <div className="tables"
            ref={tableReff}>
            <table
                className="tableBox">
                <thead className="tableHead">
                    <tr className="tableHeadBox">
                        <th className="tableHeadBoxTittle">{t("city")}</th>
                        <th>{t("residents")}</th>
                        <th>{t("code")}</th>
                    </tr>
                </thead>
                <tbody className="tableBody">
                    {cities.map((item: TypeCitesObject, index: number) => (
                        <tr
                            ref={item.select.type && item.select.target === "markerPane" ? cellReff : null}
                            id="tableCell"
                            className="tabRows"
                            style={{ backgroundColor: item.select.type ? "orange" : "black" }}
                            key={index}
                            onClick={(e) => handleTable(item.mesto, e)}>
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