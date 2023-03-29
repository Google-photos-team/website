import styled from "styled-components";

const Style = styled.div`
--width: 18%;
--marginBottom: 40px;
--cardsPerRow: 5;
--calc: (100% - (var(--cardsPerRow) * var(--width)))/(var(--cardsPerRow) - 1);
  display: flex;
  flex-wrap: wrap;
  gap: calc(var(--calc));

  user-select: none;

  img{
    pointer-events: none;
  }


  .addFolder{
    width: var(--width);
    position: relative;
    background: ${props => props.theme.colors.primary.semiWhite};
    border-radius: 8px;
    margin-bottom: var(--marginBottom);
    transition: all 0.5s ease-in-out;
    cursor: pointer;
    padding: 40px 20px;
  }

  .addFolder:hover{
    background-color: #ddd;
  }

  .addFolder img{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }


  .folder{
    width: var(--width);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
    margin-bottom: var(--marginBottom);
    padding: 40px 20px;
    border: 2px solid rgba(0, 0, 0, 0.06);
    filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.08));
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    position: relative;
  }

  .folder img{
    width: 100%;
  }

  .folder:hover{
    background-color: #ddd;
  }

  .test{
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50%;
    height: 50px;
    background-color: ${props=>props.theme.colors.shades.white};
  }

  /* ----------------------------------- */
  .inputLabel{
    position: absolute;
    right: 5px;
    top: 10px;
  }

  .inputLabel input[type="checkbox"] {
    /* removing default appearance */
    -webkit-appearance: none;
    appearance: none;
    /* creating a custom design */
    width: 25px;
    height: 25px;
    border-radius: 0.15em;
    margin-right: 0.5em;
    border: 1px solid #000000;
    border-radius: 6px;
    background: transparent;
    outline: none;
    cursor: pointer;
  }

  /* .inputLabel input[type="checkbox"]:checked{ */
  .checked{
    position: relative;
  }

  /* .inputLabel input[type="checkbox"]:checked::before { */
  .checked::before{
    content: "\\2714";
    font-size: 20px;
    color: ${props => props.theme.colors.primary.orange};
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%,-40%);
  }
  /* ----------------------------------- */


  @media (max-width: 1440px) {
    --width: 22%;
    --marginBottom: 40px;
    --cardsPerRow: 4;

    .folder{
      gap: 14px;
      padding: 40px 20px;
    }
  }

  @media (max-width: 1200px) {
    --width: 30%;
    --marginBottom: 40px;
    --cardsPerRow: 3;

    .folder{
      gap: 14px;
      padding: 40px 20px;
    }
  }

  @media (max-width: 800px) {
    --width: 45%;
    --marginBottom: 40px;
    --cardsPerRow: 2;

    .folder{
      gap: 14px;
      padding: 40px 20px;
    }
  }

  @media (max-width: 580px) {
    --width: 100%;
    --marginBottom: 40px;
    --cardsPerRow: 1;

    .addFolder{
      min-height: 280px;
    }

    .folder{
      gap: 14px;
      padding: 40px 20px;
    }
  }
`

export default Style;