
import servicesCitiesJSON from "../services";

test("administration data JSON", () => {

    const exapleJSON = [{
        "mesto": "Banská Bystrica",
        "pocetObyvatelov": 78881,
        "psc": "974 01",
        "krajske": true,
        "coordinates": {
            "latitude": 48.73583,
            "longitude": 19.14556
        }
    },
    {
        "mesto": "Bardejov",
        "pocetObyvatelov": 32553,
        "psc": "085 01",
        "krajske": false,
        "coordinates": {
            "latitude": 49.29444,
            "longitude": 21.27444
        }
    }]

    const testFunction = servicesCitiesJSON.citiesJSON(exapleJSON)
    expect(typeof testFunction).toBe("object")

    expect(testFunction).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
                select: {
                    type: false,
                    target: ""
                }
            })
        ])
    )
})