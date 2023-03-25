import styled from "styled-components";

const Style = styled.div`
  width: clamp(500px,40%,800px);

  display: flex;
  flex-direction: column;

  padding: 28px 38px 20px;


  .createButton{
    margin-top: 12px;

    border: none;
    background: #09A7BC;
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