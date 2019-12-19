import React from "react"
import { Typography } from "antd"
import styled from "styled-components"

export const reverseStyle = {
    fontSize: 11,
    textTransform: "uppercase",
    lineHeight: 1.4,
    color: "inherit"
}

const StyledHeading = styled(Typography)`
    margin-bottom: ${({ marginBottom }) => marginBottom || "1.5em"};
    .ant-typography:not(div) {
        font-weight: ${({ bold }) => bold && "bold"};
    }
`

function Heading({ level = 4, content = "", subheader = "", reverse, ...props }) {
    return (
        <StyledHeading {...props}>
            <Typography.Title level={level} reverse={reverse} style={reverse ? reverseStyle : ""}>
                {content}
            </Typography.Title>
            <Typography.Paragraph>{subheader}</Typography.Paragraph>
        </StyledHeading>
    )
}

export default Heading
