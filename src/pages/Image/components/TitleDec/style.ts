import styled from "styled-components";

export const ItemContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin: 5rem;
  position: relative;

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


`