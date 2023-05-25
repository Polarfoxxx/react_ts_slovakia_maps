import React from "react";
import "../style/Container.style.css"
import { TypeCitesArray } from "../../utils/types";
import { TypeCitesObject } from "../../utils/types";
import { TypeContextProvider } from "../types";
import { useTranslation } from 'react-i18next';
import "../../utils/i18n"
import servicesCitiesJSON from "../../utils/services";
import { Props } from "../types";

const Context = React.createContext<TypeContextProvider>({
    cities: [],
    setCities: () => { }
})
console.log(servicesCitiesJSON.citiesJSON());

function Provider({ children }: Props): JSX.Element {
    const [cities, setCities] = React.useState<TypeCitesArray>(servicesCitiesJSON.citiesJSON)
    const { t } = useTranslation();

    /* reset button */
    const handleRessetButton = (): void => {
        let resetArray: TypeCitesArray = []
        cities.map((item: TypeCitesObject) => {
            item.select.type = false
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