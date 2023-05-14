import axios from "axios"


export const getFolders = async () => {
  return await axios.get('/folders')
    .then((response) => response.data.folders);
}

export const createFolder = async ({name}:{name:string}) => {
  return await axios.post('/folders/create', {name})
  .then((response) => response.data.data);
}

export const deleteFolders = async ({ids}:{ids:string[]}) => {
  return await axios.post('/folders/delete', {folders: ids});
}

export const getFolderById = async({id}:{id:string}) => {
  return await axios.get(`/folders/${id}`)
  .then((response) => response.data.data);
}