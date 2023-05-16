import { myAxios } from "./config/config"

export const getProfile = ({ setState }: { setState: (data: any) => void }) => {
  myAxios.get("/profile").then(({ data }) => {
    setState({
      username: data.data.username,
      avatar: data.data.avatar,
    })
  })
    .catch((error) => {
      console.log(error)
    })
}