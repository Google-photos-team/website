import styled from "styled-components";

const Style = styled.div`
  width: clamp(500px,40%,800px);

  display: flex;
  flex-direction: column;
  padding: 25px;

  .image_title{
    margin:0.5rem 0 ;
  }

  @media (max-width: 580px) {
    width: 98%;
    padding: 20px 28px 12px;
  }
`

export default Style;