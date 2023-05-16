import { myAxios } from "./config/config"

export const getFolders = async () => {
  try {
    const { data } = await myAxios.get('/folders');
    if (data.status) {
      return data.data
    }
  } catch (error: any) {
    throw new Error(error.response.data.message)
  }
}

export const createFolder = async (name: string) => {
  try {
    const { data } = await myAxios.post('/folders/create', { name });
    if (data.status) {
      return data.data
    }
  } catch (error: any) {
    throw new Error(error.response.data.message)
  }
}

export const deleteFolders = ({ ids, handleAction }: { ids: string[], handleAction?: () => void }) => {
  myAxios.post('/folders/delete', { folders: ids }).then((response) => {
    if (handleAction) handleAction()
  }).catch((error) => {
    console.log(error)
  })
}