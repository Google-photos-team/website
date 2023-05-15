import axios, { AxiosError } from "axios"


export const getImages = async (folderId: string) => {
    const { data } = await axios.get(`/folders/${folderId}`);
    if (data.status) {
        return data.data;
    } else {
        throw new Error(data.message)
    }
}

export const createImage = async (image: { folder_id: string, name: string, image: string, tags: string[] }) => {
    const { data } = await axios.post('/images/create', image);
    if (data.status) {
        return data.data;
    } else {
        throw new Error(data.message)
    }
}

export const deleteImages = async (ids: string[], folder_id: string) => {
    const { data } = await axios.post('/images/delete', {
        images: ids,
        folder_id
    });

    if (data.status) {
        return true;
    } else {
        throw new Error(data.message);
    }
}

export const moveImages = async (reqData: { images: string[], source_folder_id: string, destination_folder_id: string }) => {
    const { data } = await axios.post('/images/move', reqData);
    if (data.status) {
        return true;
    } else {
        throw new Error(data.message);
    }
}

export const getImageById = async (id: string) => {
    const { data } = await axios.get(`/images/${id}`);
    if (data.status) {
        return data.data;
    } else {
        throw new Error(data.message);
    }
}