import styled from "styled-components";

const Tag = styled.span`
    padding: 12px 25px;
    text-align: center;
    color: ${props => props.theme.colors.shades.white};
    background: ${props => props.theme.colors.primary.lightBlue};
    border-radius: 21px;
    transition: 0.3s all ease-in-out;
    font-size: 18px;
    
    cursor: pointer;
    &:hover{
        background: ${props => props.theme.colors.primary.semiBlack}; 
    }

    @media (max-width: 1200px) {
      padding: 12px 16px;
      font-size: 16px;
  }
`

export default Tag;