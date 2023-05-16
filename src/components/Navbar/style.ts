import styled from "styled-components";

const Style = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;

  display: grid;
  grid-template-areas:"path search search search user";

  align-items: center;
  padding: 22px 30px;
  background: ${props => props.theme.colors.primary.semiBlack};
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.08);

  .path{
    grid-area: path;

    font-family: 'Inter';
    font-weight: 500;
    font-size: 20px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: ${props => props.theme.colors.primary.semiWhite};
  }

  .search{
    grid-area: search;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .user{
    grid-area: user;

    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 12px;
  }

  .icon{
    width: 36px;
    height: 36px;
    overflow: hidden;
    border-radius: 50%;
  }

  .icon img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }

  .name{
    font-family: 'Inter';
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
    color: ${props => props.theme.colors.primary.semiWhite};
  }


  @media (max-width: 580px) {
    gap: 8px;
    grid-template-areas:"user path" "search search" ;
    padding: 12px 20px 6px;

    .user{
      justify-content: flex-start;
    }

    .path{
      justify-content: flex-end;
    }
  }
`

export default Style;