export type TypeCitesObject = {
    mesto: string,
    pocetObyvatelov: number,
    psc: string,
    select: {
        type: boolean,
        target: string
    }
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
    select: {
        type: boolean,
        target: string
    }
    krajske: boolean,
    coordinates: {
        latitude: number
        longitude: number,
    },
}[]

