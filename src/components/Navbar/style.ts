import styled from "styled-components";

const Style = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 22px 30px;
  background: #1A1A1A;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.08);

  .path{
    font-family: 'Inter';
    font-weight: 500;
    font-size: 20px;
    line-height: 18px;
    color: #F4F4F4;
  }

  .user{
    display: flex;
    align-items: center;
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
    color: #F4F4F4;
  }


  @media (max-width: 580px) {
    flex-direction: column;
    gap: 16px;
    
    .path{
      align-self: flex-start;
      order: 2;
    }

    .user{
      align-self: flex-end;
    }
  }
`

export default Style;