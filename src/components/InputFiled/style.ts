import styled from "styled-components";
interface IProps {
    fullWidth?: boolean,
}

const Style = styled.div<IProps>`
    ${props => props.fullWidth ? "width:100%;" : ""}
    position: relative;
    .error{
        position: absolute;
        bottom: -20px;
        left: 0;
    }
`

export default Style;