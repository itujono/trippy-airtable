import React from "react"
import { Typography } from "antd"

export const reverseStyle = {
    fontSize: 11,
    textTransform: "uppercase",
    lineHeight: 1.4,
    color: "inherit"
}

function Heading({ level = 4, content = "", subheader = "", reverse, ...props }) {
    return (
        <Typography {...props}>
            <Typography.Title level={level} reverse={reverse} style={reverse ? reverseStyle : ""}>
                {content}
            </Typography.Title>
            <Typography.Paragraph>{subheader}</Typography.Paragraph>
        </Typography>
    )
}

export default Heading
