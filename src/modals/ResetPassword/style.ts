import styled from "styled-components";

const Style = styled.div`
  width: clamp(500px,40%,800px);

  display: flex;
  flex-direction: column;

  padding:30px 25px;
  @media (max-width: 580px) {
    width: 98%;
    padding: 20px 28px 12px;
  }

  .confirm_password{
    margin: 0.5rem 0 1rem;
  }
`

export default Style;