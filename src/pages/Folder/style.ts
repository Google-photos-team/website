import styled from "styled-components";

const Style = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 5%;
  flex-wrap: wrap;

  .oneImage{
    width: 30%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 30px;
  }

  .mainImage{
    width: 100%;
    border-radius: 10px;
    aspect-ratio: 372/379;
    overflow: hidden;
  }

  .mainImage img{
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
  }

  .text{
    font-family: 'Inter';
    font-weight: 600;
    font-size: 18px;
    line-height: 18px;
    color: #1A1A1A;
  }

  .tags{
    display: flex;
    align-items: center;
    gap: 2%;
  }

  .oneTag{
    width: 32%;
    padding: 12px 25px;
    text-align: center;

    font-family: 'Inter';
    font-weight: 600;
    font-size: 18px;
    line-height: 18px;
    color: #FFFFFF;
    background: #09A7BC;
    border-radius: 21px;
  }

  @media (max-width: 1200px) {
    gap: 2%;

    .oneImage{
      width: 49%;
      gap: 20px;
      margin-bottom: 30px;
    }

    .mainImage{
      aspect-ratio: 372/379;
    }

    .oneTag{
      padding: 12px 16px;
      font-size: 16px;
    }
  }

  @media (max-width: 740px) {
    gap: 0;

    .oneImage{
      width: 100%;
      margin-bottom: 30px;
    }

    .mainImage{
      aspect-ratio: 372/370;
    }

    .oneTag{
      padding: 12px 16px;
      font-size: 16px;
    }
  }
  
`

export default Style;