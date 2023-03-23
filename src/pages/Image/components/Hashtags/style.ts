import styled from "styled-components";

const HashtagsStyle = styled.div`
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
`

export default HashtagsStyle