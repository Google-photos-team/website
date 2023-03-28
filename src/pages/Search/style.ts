import styled from "styled-components";

const Style = styled.div`
  .results_block{
    display: flex;
    align-items: flex-start;
    gap: 5%;
    flex-wrap: wrap;
    @media (max-width: 1200px) {
      gap: 2%;
    }

    @media (max-width: 740px) {
      gap: 0;
    }
  } 
  `

export default Style;