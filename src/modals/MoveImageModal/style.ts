import styled from "styled-components";

const Style = styled.div`
  width: clamp(500px,40%,800px);

  display: flex;
  flex-direction: column;

  padding: 28px 38px 20px;

  .buttons{
    display: flex;
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