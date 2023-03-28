import styled from "styled-components";

const Style = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 5%;
  flex-wrap: wrap;

  --width: 30%;
  --marginBottom: 30px;

  .addImage{
    width: var(--width);
    position: relative;
    background: #F4F4F4;
    border-radius: 8px;
    margin-bottom: var(--marginBottom);
    transition: all 0.5s ease-in-out;
    cursor: pointer;
    padding: 40px 20px;
    align-self: stretch;
  }

  .addImage:hover{
    background-color: #ddd;
  }

  .addImage img{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }

  .oneImage{
    width: var(--width);
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: var(--marginBottom);
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

    --width: 49%;
    --marginBottom: 30px;

    .oneImage{
      gap: 20px;
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

    --width: 100%;
    --marginBottom: 30px;

    .addImage{
      aspect-ratio: 372/200;
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