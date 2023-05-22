import React from "react";
import "../style/Container.style.css"

import { TypeCitesArray } from "../types";
import { TypeCitesObject } from "../types";
import { TypeContextProvider } from "../types";
import { useTranslation } from 'react-i18next';
import "../../../i18n"
import citiesJSON from "../../utils/cities.json"




type Props = {
    children: JSX.Element | JSX.Element[]
}
const Context = React.createContext<TypeContextProvider>({
    cities: [],
    setCities: () => { }
})


function Provider({ children }: Props): JSX.Element {
    const [cities, setCities] = React.useState<TypeCitesArray>(citiesJSON)
    const { t } = useTranslation();

    /* reset button */
    const handleRessetButton = (): void => {
        let resetArray: TypeCitesArray = []
        cities.map((item: TypeCitesObject) => {
            item.select = false
            resetArray.push(item)
        })
        setCities(resetArray)
    }



    return (
        <div className="containerApp">
            <div className="containerHeader">
                <h1>{t('greeting')}</h1>
            </div>
            <div className="containerContext">
                <Context.Provider value={{ cities, setCities }}>
                    {children}
                </Context.Provider>
            </div>
            <div className="ressetBtn">
                <button
                    onClick={handleRessetButton}
                    className="resetButton">
                    Reset
                </button>
            </div>

        </div>
    )
}
const Container = {
    Provider,
    Context
}

export default Container