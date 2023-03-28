import styled from "styled-components";

const MenuStyle = styled.div`
  width: 20%;
  position: absolute;
  overflow: hidden;
  height: 109px;
  margin-top: 12%;
  background-color: ${(props) => props.theme.colors.primary.skyBlue};
  box-shadow: 0px 6px 8px rgba(25, 50, 47, 0.08),
    0px 3px 4px rgba(18, 71, 52, 0.02), 0px 1px 16px rgba(18, 71, 52, 0.03);
  border-radius: 10px;
  z-index: 1;

  .menu {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    text-align: start;
    list-style: none;
  }
  .menuTypes {
    padding: 0px 20px;
    margin: 15px;
  }

  .menuTypes li {
    overflow: hidden;
    cursor: pointer;
    font-size: 23px;
    color: ${(props) => props.theme.colors.shades.white};
  }

  .menuTypes .move {
    overflow: hidden;
    padding-bottom: 15px;
  }
`;

export default MenuStyle;
