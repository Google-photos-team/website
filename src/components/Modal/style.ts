import styled from "styled-components";

const Style = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background-color: rgba(0,0,0,0.5);

  .modalContent{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);

    /* /Gray / White */
    background: ${props =>props.theme.colors.shades.white};
    /* Stroke/light */ 
    border: 1px solid ${props => props.theme.colors.primary.lightGrey};
    /* Shadow / Small */
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 20px 20px rgba(0, 0, 0, 0.08);
    border-radius: 8px;
  }

  .exitIcon{
    position: absolute;
    right: 10px;
    top: 10px;

    background: ${props =>props.theme.colors.primary.semiWhite};
    border-radius: 29px;

    width: 24px;
    height: 24px;

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`

export default Style;