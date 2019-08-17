import React from "react"
import { Button as Buttonee } from "antd"
import styled from "styled-components"

export const StyledButton = styled(Buttonee)`
    && {
        transition: all 0.1s ease;
        background-color: ${({ type }) => type === "primary" && "#25b864"};
        border-color: ${({ type }) => type === "primary" && "#25b864"};
    }
`

// const StyledSubmit = styled(SubmitButton)`
// 	&& {
// 		transition: all 0.1s ease;
// 		background-color: ${({ type }) => type === "primary" && theme.color[0]};
// 		border-color: ${({ type }) => type === "primary" && theme.color[0]};
// 	}
// `

function Button(props) {
    // if (props.submit) return <StyledSubmit {...props} />
    return <StyledButton {...props} />
}

export default Button
