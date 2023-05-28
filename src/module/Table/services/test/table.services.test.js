
import servicesObjectDesignationFromJSON from "../services";

describe("test services", () => {

    test("city marking test", () => {
        const cities = "Banská Bystrica"
        const eventType = "tableEvent"


        const designation = servicesObjectDesignationFromJSON.designationOfTheCityInJSON(cities, eventType)
        expect(designation).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    "mesto": "Banská Bystrica",
                    "pocetObyvatelov": 78881,
                    "psc": "974 01",
                    "select": {
                        "type": true,
                        "target": "tableEvent"
                    },
                    "krajske": true,
                    "coordinates": {
                        "latitude": 48.73583,
                        "longitude": 19.14556
                    }
                })
            ])
        )
    })

    test("city designation cancellation test", () => {
        const cities = "Banská Bystrica"
        const eventType = "tableEvent"

        const designation = servicesObjectDesignationFromJSON.designationOfTheCityInJSON(cities, eventType)
        expect(designation).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    "mesto": "Bardejov",
                    "pocetObyvatelov": 32553,
                    "psc": "085 01",
                    "select": {
                        "type": false,
                        "target": ""
                    },
                    "krajske": false,
                    "coordinates": {
                        "latitude": 49.29444,
                        "longitude": 21.27444
                    }
                })
            ])
        )
    })

})
