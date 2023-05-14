import axios from "axios"


export const getProfile = ({setState}:{setState:(data:any)=>void}) => {
  axios.get("/profile").then((response) => {
    setState({
      username: response.data.user.username,
      avatar: response.data.user.avatar,
    })
  }
  ).catch((error) => {
    console.log(error)
  })
}