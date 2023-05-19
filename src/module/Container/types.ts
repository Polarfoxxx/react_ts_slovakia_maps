

export type TypeCitesObject = {
    mesto: string,
    pocetObyvatelov: number,
    psc: string,
    select: boolean
    krajske: boolean,
    coordinates: {
        latitude: number
        longitude: number,
    },
}

export type TypeCitesArray = {
    mesto: string,
    pocetObyvatelov: number,
    psc: string,
    select: boolean
    krajske: boolean,
    coordinates: {
        latitude: number
        longitude: number,
    },
}[]

export type TypeContextProvider = {
    cities: TypeCitesArray,
    setCities: React.Dispatch<React.SetStateAction<TypeCitesArray>>
}