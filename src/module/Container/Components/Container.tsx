import React from "react";
import "../style/Container.style.css"

import { TypeCitesArray } from "../types";
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


    return (
        <div className="container">
           <h1>{t('greeting')}</h1>
            <Context.Provider value={{ cities, setCities }}>
                {children}
            </Context.Provider>
        </div>
    )
}
const Container = {
    Provider,
    Context
}

export default Container