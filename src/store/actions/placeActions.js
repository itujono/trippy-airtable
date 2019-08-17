import Airtable from "airtable"

const base = new Airtable({
    apiKey: "keyZysTyeJJK0fsxO"
}).base("appnhFIk28bp5cP56")

export const getPlaces = () => {
    return base("Places")
        .select({
            maxRecords: 3,
            view: "All ideas"
        })
        .eachPage(
            function page(records, fetchNextPage) {
                // dispatch({ type: GET_PLACES, payload: records })
                records.forEach(function(record) {
                    console.log({
                        city: record.get("City"),
                        highlights: record.get("Highlights"),
                        notes: record.get("Notes")
                    })
                })

                fetchNextPage()
            },
            function done(err) {
                if (err) {
                    console.error(err)
                    return
                }
            }
        )
}
