import servicesCitiesJSON from "../../utils/services"
import { TypeCitesArray } from "../../utils/types"

const servicesDesignationOfTheCityInJSON = {
    designationOfTheCityInJSON
}
export default servicesDesignationOfTheCityInJSON


function designationOfTheCityInJSON(cities: string, eventType: string): TypeCitesArray {
   return servicesCitiesJSON.citiesJSON().map((item) => {
    const isCities = item.mesto === cities;
    return {
        ...item,
        select: {
            type: isCities,
            target: isCities ? eventType : ""
        }
    }
   })



/*     let newCityArray: TypeCitesArray = []
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
    ) */
}