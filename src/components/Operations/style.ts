import styled from "styled-components";

const Style = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: baseline;
  gap: 10px;

  .hoverClass{
    border-radius: 8px;
    user-select: none;
    cursor: pointer;
  }

  .selectBlock{
    display: flex;
    align-items: flex-start;
    gap: 6px;
    padding: 4px 8px 4px 3px;
  }

  .selectAll{
    padding: 4px;
    align-self: flex-start;
  }

  .hoverClass:hover{
    background-color: rgba(0,0,0,0.1);
  }

  .selectIcon{
    width: 24px;
    height: 24px;
  }

  .iconsClass{
    padding: 2px 2px 0 2px;
  }

  .disabledClass{
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export default Style;