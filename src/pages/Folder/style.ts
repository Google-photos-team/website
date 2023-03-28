import styled from "styled-components";

const Style = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 5%;
  flex-wrap: wrap;

  .add_button{
    width: 30%;
    background-color: ${props => props.theme.colors.primary.semiWhite};
    border: 1px solid ${props => props.theme.colors.primary.gray};
    height: 100% !important;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    cursor: pointer;
    height: 400px !important;

    transition: 0.3s all ease-in-out;
    &:hover{
      background-color: ${props => props.theme.colors.primary.gray};
    }
    @media (max-width: 1200px) {
      width: 49%;
      margin-bottom: 30px;
    }

    @media (max-width: 740px) {
      width: 100%;
      margin-bottom: 30px;
    }
  }

  @media (max-width: 1200px) {
    gap: 2%;
  }

  @media (max-width: 740px) {
    gap: 0;
  }
  
`

export default Style;