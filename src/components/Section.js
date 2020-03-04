import React from "react"
import styled from "styled-components"
import { media } from "utils"

const StyledSection = styled.section`
    && {
        padding: ${({ ph }) => (ph ? `2em ${ph}` : `2em 4em`)};
        text-align: ${({ textAlign }) => textAlign || "left"};
        margin-bottom: ${({ mb }) => mb || "1em"};
    }

    ${media.mobile`
        && {
			padding: ${({ ph }) => (ph ? `2em ${ph}` : `2em 1.5em`)};
		}
    `}
`

function Section({ children, ...props }) {
    return <StyledSection {...props}>{children}</StyledSection>
}

export default Section
