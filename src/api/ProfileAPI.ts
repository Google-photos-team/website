import axios from "axios"

export const getProfile = ({ setState }: { setState: (data: any) => void }) => {
  axios.get("/profile").then(({ data }) => {
    setState({
      username: data.data.username,
      avatar: data.data.avatar,
    })
  })
    .catch((error) => {
      console.log(error)
    })
}