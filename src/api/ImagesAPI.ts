import { myAxios } from "./config/config"

export const getImages = async (folderId: string) => {
    try {
        const { data } = await myAxios.get(`/folders/${folderId}`);
        if (data.status) {
            return data.data;
        }
    } catch (error: any) {
        throw new Error(error.response.data.message)
    }
}

export const createImage = async (image: { folder_id: string, name: string, image: string, tags: string[] }) => {
    try {
        const { data } = await myAxios.post('/images/create', image);
        if (data.status) {
            return data.data;
        }
    } catch (error: any) {
        throw new Error(error.response.data.message)
    }
}

export const deleteImages = async (ids: string[], folder_id: string) => {
    try {
        const { data } = await myAxios.post('/images/delete', {
            images: ids,
            folder_id
        });

        if (data.status) {
            return true;
        }
    } catch (error: any) {
        throw new Error(error.response.data.message)
    }
}

export const moveImages = async (reqData: { images: string[], source_folder_id: string, destination_folder_id: string }) => {
    try {
        const { data } = await myAxios.post('/images/move', reqData);
        if (data.status) {
            return true;
        }
    } catch (error: any) {
        throw new Error(error.response.data.message)
    }
}

export const getImageById = async (id: string) => {
    try {
        const { data } = await myAxios.get(`/images/${id}`);
        if (data.status) {
            return data.data;
        }
    } catch (error: any) {
        throw new Error(error.response.data.message)
    }
}

export const searchInImages = async (query: string) => {
    try {
        const { data } = await myAxios.get(`/images/find/${query}`);
        if (data.status) {
            return data.data;
        }
    } catch (error: any) {
        throw new Error(error.response.data.message)
    }
}