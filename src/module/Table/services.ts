import servicesCitiesJSON from "../utils/services"
import { TypeCitesObject } from "../utils/types"
import { TypeCitesArray } from "../utils/types"

const servicesObjectDesignationFromJSON = {
    objectDesignationFromJSON
}
export default servicesObjectDesignationFromJSON


function objectDesignationFromJSON(cities: string): TypeCitesArray {
    let newCityArray: TypeCitesArray = []
    
    servicesCitiesJSON.citiesJSON().forEach((item: TypeCitesObject) => {
        if (item.mesto === cities) {
            item.select.type = true

        } else { item.select.type = false }
        newCityArray.push(item)
    })
    return (
        newCityArray
    )
}