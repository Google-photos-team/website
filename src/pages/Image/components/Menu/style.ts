import styled from "styled-components";

const MenuStyle = styled.div`
  position: absolute;
  overflow: hidden;
  top: 100%;
  right: 50%;
  background-color: ${(props) => props.theme.colors.primary.skyBlue};
  box-shadow: 0px 6px 8px rgba(25, 50, 47, 0.08),
    0px 3px 4px rgba(18, 71, 52, 0.02), 0px 1px 16px rgba(18, 71, 52, 0.03);
  border-radius: 10px;
  z-index: 1;
  width: 180px;

  .dropMenu {
    display: flex;
    justify-content: start;
    flex-direction: column;
    align-items: flex-start;
    text-align: start;
    list-style: none;
  }
  .menuTypes {
    /* padding: 0px 20px; */
    width: 100%;
    text-align: center;
  }

  .menuTypes li {
    overflow: hidden;
    cursor: pointer;
    font-size: 23px;
    color: ${(props) => props.theme.colors.shades.white};
    padding: 8px 20px;
  }

  .menuTypes li:hover{
    background-color: ${(props) => props.theme.colors.primary.semiBlack};
  }

  .menuTypes .move {
    overflow: hidden;
  }
`;

export default MenuStyle;
