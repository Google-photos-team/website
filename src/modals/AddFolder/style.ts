import styled from "styled-components";

const Style = styled.form`
  display: flex;
  flex-direction: column;

  .createButton{
    margin-top: 12px;

    border: none;
    background: ${props => props.theme.colors.primary.skyBlue};
    border-radius: 8px;
    height: 40px;
    cursor: pointer;
  }

  @media (max-width: 580px) {
    width: 98%;
    padding: 20px 28px 12px;
  }
`

export default Style;