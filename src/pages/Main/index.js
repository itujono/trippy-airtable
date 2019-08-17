import React, { useEffect } from "react"
import { Section, Button } from "components"
import { Link } from "react-router-dom"
import Heading from "../../components/Heading"
import { useSelector, useDispatch } from "react-redux"
import { FETCH_USER } from "../../store/types"

export default function Main() {
    const user = useSelector(({ user }) => user.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({ type: FETCH_USER })
    }, [])

    return (
        <Section>
            <Heading content="Main page" subheader="Keren kan, eheheh" />
            <Button type="primary">
                <Link to="/trip">Go to Trip</Link>
            </Button>
        </Section>
    )
}
