import React, { useEffect } from "react"
import { Section, Button } from "components"
import Airtable from "airtable"
import { Link } from "react-router-dom"
import Heading from "components/Heading"
import { useSelector, useDispatch } from "react-redux"
import { FETCH_USER, GET_PLACES } from "store/types"
import { getPlaces } from "store/actions/placeActions"

const base = new Airtable({
    apiKey: "keyZysTyeJJK0fsxO"
}).base("appnhFIk28bp5cP56")

export default function Main() {
    const data = useSelector(({ place, user }) => ({
        places: place,
        user: user
    }))
    const dispatch = useDispatch()

    // const fetchPlaces = () => {
    //     return base("Places")
    //         .select({
    //             maxRecords: 3,
    //             view: "All ideas"
    //         })
    //         .eachPage(
    //             function page(records, fetchNextPage) {
    //                 records.forEach(function(record) {
    //                     console.log("Retrieved", record)
    //                 })
    //                 fetchNextPage()
    //             },
    //             function done(err) {
    //                 if (err) {
    //                     console.error(err)
    //                     return
    //                 }
    //             }
    //         )
    // }

    useEffect(() => {
        getPlaces()
        // dispatch({ type: GET_PLACES })
        // dispatch({ type: FETCH_USER })
    }, [])

    console.log({ data })

    return (
        <Section>
            <Heading bold content="Main page" subheader="Keren kan, eheheh" />
            <Button type="primary">
                <Link to="/trip">Go to Trip</Link>
            </Button>
        </Section>
    )
}
