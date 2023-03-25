import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    font-family: 'Inter', sans-serif;
    padding: 0;
    margin: 0;
    font-weight: 500;
    box-sizing: border-box;
  }


  .containerWidth{
    width: 1400px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 1500px) {
    .containerWidth{
      width: calc(100% - 50px);
    } 
  }

  @media (max-width: 768px) {
    .containerWidth{
      width: calc(100% - 32px);
    } 
  }

  @media (max-width: 376px) {
    .containerWidth{
      width: calc(100% - 24px);
    }
  }

  @media (max-width: 321px) {
    .containerWidth{
      width: calc(100% - 12px);
    }
  }
`