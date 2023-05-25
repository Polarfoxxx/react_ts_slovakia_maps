
import { TypeCitesArray } from "./types"
import citiesRawJSON from "./cities.json"

const servicesCitiesJSON = {
    citiesJSON
}
export default servicesCitiesJSON


 function citiesJSON(): TypeCitesArray {
    let newAllcitiesArray: TypeCitesArray = [];
    citiesRawJSON.forEach((item: any) => {
        item.select = {
            type: false,
            target: ""
        };
        newAllcitiesArray.push(item);
    });
    return newAllcitiesArray;
}
