import styled from "styled-components";
interface IProps {
    fullWidth?: boolean,
}

const Input = styled.input<IProps>`
    ${props => props.fullWidth ? "width:100%;" : ""}
    padding: 0.5rem 0.65rem;
    font-size: 1rem;
    font-weight: 500;
    outline: none;
    border: 1px solid ${props => props.theme.colors.primary.gray};
    border-radius: 0.3rem;
    color: ${props => props.theme.colors.primary.semiBlack};
    transition: 0.3s all ease-in-out;
    background-color: ${props => props.theme.colors.primary.semiWhite};

    &:focus , &:hover{
        border: 1px solid ${props => props.theme.colors.primary.semiBlack};
    }
`

export default Input;