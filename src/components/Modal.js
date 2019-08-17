import React from "react"
import styled from "styled-components"
import { Modal as Modalee } from "antd"

const StyledModal = styled(Modalee)`
    border-radius: 8px;
`

function Modal(props) {
    return <StyledModal {...props} />
}

export default Modal
