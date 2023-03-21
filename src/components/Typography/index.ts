import styled, { DefaultTheme } from "styled-components";
/*
    !HOW TO USE
    <H1 color='black'>HELLO WORLD</H1>
    <H2 color='semiBlack'>HELLO WORLD</H2>
    <H3 color='darkBlue'>HELLO WORLD</H3>
    <H4 color='lightBlue'>HELLO WORLD</H4>
    <H5 color='lightRed'>HELLO WORLD</H5>
    <Body1>HELLO WORLD</Body1>
    <Body2>HELLO WORLD</Body2>
    <Body3>HELLO WORLD</Body3>
*/

type colors = "darkBlue" | "lightBlue" | "semiBlack" | "semiWhite" | "lightRed" | "white" | "black";

interface IProps {
    color?: colors
    weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700,
    align?: "center" | "end" | "start" | "justify",
    transform?: "capitalize" | "uppercase" | "lowercase",
    margin?: string
}


const getColorsFromTheme = (color: colors, theme: DefaultTheme) => {
    if (color === "darkBlue") return theme.colors.primary.darkBlue
    if (color === "lightBlue") return theme.colors.primary.lightBlue
    if (color === "semiBlack") return theme.colors.primary.semiBlack
    if (color === "lightRed") return theme.colors.primary.lightRed
    if (color === "semiWhite") return theme.colors.primary.semiWhite

    if (color === "white") return theme.colors.shades.white
    if (color === "black") return theme.colors.shades.black
}

const Typography = (theme: DefaultTheme, props: IProps) => {
    const result = `
        color: ${props.color ? getColorsFromTheme(props.color, theme) : theme.colors.primary.semiBlack};};
        ${props.align ? "text-align: " + props.align + ";" : ""}
        ${props.weight ? "font-weight: " + props.weight + ";" : ""}
        ${props.transform ? "text-transform: " + props.transform + ";" : ""}
        ${props.margin ? "margin: " + props.margin + ";" : ""}
        `
    return result;
}

export const H1 = styled.h1<IProps>`
    font-weight: ${props => props.weight ? props.weight : 700};
    font-size: 3.5rem;
    line-height: 4rem;
    ${props => Typography(props.theme, {
    color: props.color,
    align: props.align,
    weight: props.weight,
    transform: props.transform,
    margin: props.margin
})}
`

export const H2 = styled.h2<IProps>`
    font-weight: ${props => props.weight ? props.weight : 700};
    font-size: 3rem;
    line-height: 3.7rem;
    ${props => Typography(props.theme, {
    color: props.color,
    align: props.align,
    weight: props.weight,
    transform: props.transform,
    margin: props.margin
})}
`

export const H3 = styled.h4<IProps>`
    font-weight: ${props => props.weight ? props.weight : 600};
    font-size: 2.5rem;
    line-height: 3.2rem;
    ${props => Typography(props.theme, {
    color: props.color,
    align: props.align,
    weight: props.weight,
    transform: props.transform,
    margin: props.margin
})}
`

export const H4 = styled.h4<IProps>`
    font-weight: ${props => props.weight ? props.weight : 600};
    font-size: 2rem;
    line-height: 2.5rem;
    ${props => Typography(props.theme, {
    color: props.color,
    align: props.align,
    weight: props.weight,
    transform: props.transform,
    margin: props.margin
})}
`

export const H5 = styled.h5<IProps>`
    font-weight: ${props => props.weight ? props.weight : 500};
    font-size: 1.5rem;
    line-height: 2rem;
    ${props => Typography(props.theme, {
    color: props.color,
    align: props.align,
    weight: props.weight,
    transform: props.transform,
    margin: props.margin
})}
`

export const Body1 = styled.p<IProps>`
    font-weight: ${props => props.weight ? props.weight : 400};
    font-size: 1rem;
    line-height: 1.25rem;
    ${props => Typography(props.theme, {
    color: props.color,
    align: props.align,
    weight: props.weight,
    transform: props.transform,
    margin: props.margin
})}
`

export const Body2 = styled.p<IProps>`
    font-weight: ${props => props.weight ? props.weight : 400};
    font-size: 0.875rem;
    line-height: 1rem;
    ${props => Typography(props.theme, {
    color: props.color,
    align: props.align,
    weight: props.weight,
    transform: props.transform,
    margin: props.margin
})}
`

export const Body3 = styled.p<IProps>`
    font-weight: ${props => props.weight ? props.weight : 400};
    font-size: 0.75rem;
    line-height: 0.875rem;
    ${props => Typography(props.theme, {
    color: props.color,
    align: props.align,
    weight: props.weight,
    transform: props.transform,
    margin: props.margin
})}
`

export const Span = styled.span<IProps>`
    font-weight: ${props => props.weight ? props.weight : 400};
    ${props => Typography(props.theme, {
    color: props.color,
    align: props.align,
    weight: props.weight,
    transform: props.transform
})}
`