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
      aspect-ratio: 420/400;
      overflow: hidden;
      position: relative;
      cursor: pointer;
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
      border: 1px solid ${props=> props.theme.colors.shades.black};
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