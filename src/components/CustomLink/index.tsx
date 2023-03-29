import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface IProps {
    to: string,
    children: ReactNode,
    className?: ""
}


interface spanProps{
    noDirectChildrenStyle?: boolean,
}

const Style = styled.span<spanProps>`
    display: contents;
    color: inherit;
    text-decoration: none;

    ${({noDirectChildrenStyle}) =>
        noDirectChildrenStyle ?"": `
        >*{
            display: contents;
            color: inherit;
            text-decoration: none;
        }
        `
    }
`
const CustomLink = ({ to, children, className = "" }: IProps) => {
    return to?
    <Style className={className}>
        <Link to={to}>{children}</Link>
    </Style>
    :
    <Style className={className} noDirectChildrenStyle>
        {children}
    </Style>
}

export default CustomLink