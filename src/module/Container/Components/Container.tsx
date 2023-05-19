import React, { SetStateAction } from "react";
import "../style/Container.style.css"
import citiesJSON from "../../utils/cities.json"
import { TypeCitesArray } from "../types";
import { type } from "os";

type Props = {
    children: JSX.Element | JSX.Element[]
}



type TypeContextProvider = {
    cities: TypeCitesArray,
    setCities: React.Dispatch<SetStateAction<TypeCitesArray>>
}

const Context = React.createContext<TypeContextProvider>({
    cities: [],
    setCities: () => { }
})


function Provider({ children }: Props): JSX.Element {
    const [cities, setCities] = React.useState<TypeCitesArray>([])

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