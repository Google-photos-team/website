import styled from "styled-components";


const HashtagsStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 5px;

  .hashtagsTitle{
    padding: 5px;
    margin: 5px;
    width: 80px;
    height: 30px;
    border-radius: 10px;
    background-color: ${props => props.theme.colors.primary.skyBlue};
    color: ${props =>props.theme.colors.shades.black};
  }

  .hashtagsTitle:hover{
    padding: 5px;
    margin: 5px;
    width: 80px;
    height: 30px;
    border-radius: 10px;
    background-color: ${props => props.theme.colors.primary.skyBlueHover};
    color: ${props =>props.theme.colors.shades.black};
  }
`

export default HashtagsStyle