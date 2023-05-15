import axios from "axios"


export const getFolders = async () => {
  const { data } = await axios.get('/folders');
  if (data.status) {
    return data.data
  } else {
    throw new Error(data.message)
  }
}

export const createFolder = async (name: string) => {
  const { data } = await axios.post('/folders/create', { name });
  if (data.status) {
    return data.data
  } else {
    throw new Error(data.message)
  }
}

export const deleteFolders = ({ ids, handleAction }: { ids: string[], handleAction?: () => void }) => {
  axios.post('/folders/delete', { folders: ids }).then((response) => {
    if (handleAction) handleAction()
  }).catch((error) => {
    console.log(error)
  })
}