import styled from "styled-components";

const Style = styled.div`
  display: flex;
  flex-direction: column;
  
  .buttons{
    margin: 10px 0;
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: flex-end;
  }

  .createButton{
    margin-top: 12px;
    border: none;
    background-color: ${props => props.theme.colors.primary.skyBlue};
    border-radius: 8px;
    height: 40px;   
    width: 184px;
    margin: 5px;
    cursor: pointer;
  }
  .cancelButton{
    margin-top: 12px;
    border: none;
    border-radius: 8px;
    height: 40px;   
    width: 184px;
    margin: 5px;
    cursor: pointer;
    background-color:${props => props.theme.colors.shades.black}
  }

  @media (max-width: 580px) {
    width: 98%;
    padding: 20px 28px 12px;
  }
`

export default Style;