import axios from "axios"


export const getFolders = ({setState}:{setState:(data:any)=>void}) => {
  axios.get('/folders').then((response) => {
    setState(response.data.folders)
  }).catch((error) => {
    console.log(error)
  })
}

export const createFolder = ({name,handleAction}:{name:string,handleAction?:(data:any) => void}) => {
  axios.post('/folders/create', {name}).then((response) => {
    if(handleAction) handleAction({_id:response.data.data._id,name:response.data.data.name})
  }).catch((error) => {
    console.log(error)
  })
}

export const deleteFolders = ({ids,handleAction}:{ids:string[],handleAction?:() => void}) => {
  axios.post('/folders/delete', {folders: ids}).then((response) => {
    if(handleAction) handleAction()
  }).catch((error) => {
    console.log(error)
  })
}

export const getFolderById = ({id,setState}:{id:string,setState:(data:any)=>void}) => {
  axios.get(`/folders/${id}`).then((response) => {
    setState(response.data.data)
  }).catch((error) => {
    console.log(error)
  })
}