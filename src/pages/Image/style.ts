import styled from "styled-components";

const Styles = styled.div`

.item {
    display: flex;
    padding: 0 4rem;
  }
  
  .itemImage {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  
  }
  
  .itemImage img {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    padding: 10px;
    margin-top: 100px;
  }
  
  .item-content {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    margin: 5rem;
    position: relative;
  }
  
  
  .item-content-title H1 {
    font-weight: 600;
    font-size: 28px;
    line-height: 20px;
    color: #123;
  }
  
  
  .item-content-detail {
    margin-top: 25px;
    margin-bottom: 30px;
    padding-top: 20px;
  }
  
  .item-content-detail p {
    font-size: 16px;
    line-height: 26px;
    color: #123;
    width: 500px;
  }
  
  .item-content-action {
    display: flex;
    position: absolute;
    right: 0;
  }
  
  .item-content-action p {
    cursor: pointer;
    font-size: 18px;
    color: #123;
    background: var(--primary-btn);
    margin-inline: 10px;
    border-radius: 5px;
    padding: 5px 5px 0px 5px;
  }
  
  .menu img {
    display: flex;
    justify-content: end;
    flex-direction: row;
    margin-top: 60px;
    margin-right: 10px;
  
  }
  
  
  .hashtags {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 5px;
  }
  
  .hashtags span {
    padding: 5px;
    margin: 5px;
    width: 80px;
    height: 30px;
    border-radius: 10px;
    background-color: #0926BC;
    color: white;
  }
  
  .hashtags span:hover {
    padding: 5px;
    margin: 5px;
    width: 80px;
    height: 30px;
    border-radius: 10px;
    background-color: #6980f0;
    color: black;
  }
  
  
  @media screen and (max-width: 1050px) {
    .item{
      flex-direction: column;
    }
    .item-content{
      margin: 0 0 3rem;
    }
    .item-image{
      border-right: unset;
    }
    .item-content-detail p{
      width: 100%;
    }
   
  }
  
  @media screen and (max-width: 650px) {
    .item-content h1{
      font-size: 28px;
    line-height: 42px;
    }
    .item-content p{
      font-size: 16px;
      line-height: 24px;
    }
    .item-content__people{
      flex-direction: column;
    }
    .item-content__people p{
      margin: 0;
    }

  
  }
  @media screen and (max-width: 490px){
    .item-content h1{
      font-size: 28px;
    line-height: 42px;
    }
    .item-content p{
      font-size: 14px;
      line-height: 26px;
    }
    .item{
      padding-inline:1rem !important ;
      padding-top: 1rem !important;
    }
    .item-image img{
      padding: 0;
      border-radius: 20px;
      margin-bottom: 25px;
    }
    .item-content-action{
      top: 15%;
    }
    .item-content-action p{
      margin-inline: 5px;
      
    }
   
  }

`

export default Styles;

