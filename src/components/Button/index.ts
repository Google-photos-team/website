import styled, { css } from "styled-components";
/*
    !HOW TO USE
    <Button margin='16px 8px' size='large'>CLICK ME</Button>
    <Button margin='16px 8px' color='secondary' size='large'>CLICK ME</Button>

    <Button margin='16px 8px' size='medium'>CLICK ME</Button>
    <Button margin='16px 8px' color='secondary' size='medium'>CLICK ME</Button>

    <Button margin='16px 8px' size='small'>CLICK ME</Button>
    <Button margin='16px 8px' color='secondary' size='small'>CLICK ME</Button>

    <Button fullWidth>CLICK ME</Button>
*/
interface IProps {
    color?: "primary" | "secondary" | "danger",
    size?: "large" | "medium" | "small",
    margin?: string,
    fullWidth?: boolean,
}

// size
const largeStyle = css`
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.5rem;
    padding: 11px 24px;
`

const mediumStyle = css`
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.25rem;
    padding: 8px 20px;
`

const smallStyle = css`
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1rem;
    padding: 6px 16px;
`
const Button = styled.button<IProps>`
    ${props => props.fullWidth ? "width:100%;" : ""}
    background-color:${props => props.color === "secondary" ?
        props.theme.colors.primary.semiWhite : props.color === "danger" ? props.theme.colors.primary.lightRed : props.theme.colors.primary.lightBlue};
    color:${props => props.color === "secondary" ? props.theme.colors.primary.semiBlack : props.theme.colors.primary.semiWhite};
    outline: none;
    border: none;
    cursor: pointer;
    ${props => props.margin ? `margin:${props.margin};` : ""}
    transition: 0.3s all ease-in-out;
    border-radius: 5px;

    ${props => props.size === "large" ? largeStyle :
        props.size === "small" ? smallStyle : mediumStyle}

    &:hover{
        background-color:${props => props.theme.colors.primary.semiBlack};
        color:${props => props.theme.colors.primary.semiWhite};
    }

    &:disabled{
        background-color:${props => props.theme.colors.shades.white};
        color:${props => props.theme.colors.primary.semiWhite};
    }
`

export default Button;