import { TypeCitesArray } from "../utils/types"

export type Props = {
    children: JSX.Element | JSX.Element[]
}


export type TypeContextProvider = {
    cities: TypeCitesArray,
    setCities: React.Dispatch<React.SetStateAction<TypeCitesArray>>
}