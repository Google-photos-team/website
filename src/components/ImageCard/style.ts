import styled from "styled-components";

const Style = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 30px;

    .mainImage{
      width: 100%;
      border-radius: 10px;
      height: 400px;
      overflow: hidden;
    }

    .mainImage img{
      width: 100%;
      height: 100%;
      border-radius: 10px;
      object-fit: cover;
    }

    .tags{
      display: flex;
      align-items: center;
      gap: 2%;
    }
    
    .card_tag{
      width: 32%;
    }

    
  @media (max-width: 1200px) {
    width: 49%;
    gap: 20px;
    margin-bottom: 30px;
  }

  @media (max-width: 740px) {
    width: 100%;
    margin-bottom: 30px;
  }
`

export default Style;