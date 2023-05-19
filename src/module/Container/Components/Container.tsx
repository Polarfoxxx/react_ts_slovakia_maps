import React from "react";
import "../style/Container.style.css"

import { TypeCitesArray } from "../types";
import { TypeContextProvider } from "../types";

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

    return (
        <div className="container">
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