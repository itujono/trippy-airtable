import React, { useEffect } from "react"
import { Section, Button } from "components"
import { Link } from "react-router-dom"
import Heading from "components/Heading"
import { useSelector, useDispatch } from "react-redux"
import { fetchCategories, fetchPromoProducts } from "store/actions/productActions"
import { Row, Col, Icon, Input } from "antd"

export default function Home() {
    const dispatch = useDispatch()
    const categories = useSelector(({ product }) => product.categories)
    const promoProducts = useSelector(({ product }) => product.promoProducts)

    useEffect(() => {
        dispatch(fetchCategories())
        dispatch(fetchPromoProducts())
    }, [])

    return (
        <Section>
            <Row gutter={16}>
                <Col lg={4}>
                    <Icon type="HeartOutlined" />
                </Col>
                <Col lg={20}>
                    <Input.Search placeholder="Search everything..." onSearch={value => console.log({ value })} />
                </Col>
            </Row>
        </Section>
    )
}
