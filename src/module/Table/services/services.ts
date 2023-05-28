import servicesCitiesJSON from "../../utils/services"
import { TypeCitesObject } from "../../utils/types"
import { TypeCitesArray } from "../../utils/types"

const servicesDesignationOfTheCityInJSON = {
    designationOfTheCityInJSON
}
export default servicesDesignationOfTheCityInJSON


function designationOfTheCityInJSON(cities: string, eventType: string): TypeCitesArray {
    let newCityArray: TypeCitesArray = []
    servicesCitiesJSON.citiesJSON().forEach((item: TypeCitesObject) => {
        if (item.mesto === cities) {
            item.select = {
                type: true,
                target: eventType
            }
        } else {
            item.select = {
                type: false,
                target: ""
            }
        }
        newCityArray.push(item)
    })
    return (
        newCityArray
    )
}