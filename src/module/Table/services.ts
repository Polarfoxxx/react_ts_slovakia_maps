import citiesJSON from "../utils/cities.json"
import { TypeCitesObject } from "../Container/types"
import { TypeCitesArray } from "../Container/types"

const servicesObjectDesignationFromJSON = {
    objectDesignationFromJSON
}
export default servicesObjectDesignationFromJSON


function objectDesignationFromJSON(cities: string): TypeCitesArray {
    let newCityArray: TypeCitesArray = []
    citiesJSON.forEach((item: TypeCitesObject) => {
        if (item.mesto === cities) {
            item.select = true

        } else { item.select = false }
        newCityArray.push(item)
    })
    return (
        newCityArray
    )
}