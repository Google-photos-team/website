import styled from "styled-components";

const MenuStyle = styled.div`
   width: 92px;
   height: 109px;
   background-color: ${props => props.theme.colors.shades.white};
   box-shadow: 0px 6px 8px rgba(25, 50, 47, 0.08),0px 3px 4px rgba(18, 71, 52, 0.02), 0px 1px 16px rgba(18, 71, 52, 0.03);;
   border-radius: 10px;

   .menuTypes{
    font-size: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 5px;
    padding:2px;
   }

   .menuTypes .move{
    padding: 8px;    
   }
`;

export default MenuStyle;