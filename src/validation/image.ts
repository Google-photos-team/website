import * as yup from 'yup';

export const createImageSchema = yup.object({
    folder_id: yup.string().required("Folder ID is required"),
    name: yup.string().required("Image title is required"),
    image: yup.string().required("Image is required"),
    tags: yup.array().of(yup.string()).required("Image tags field is required").min(2, "tags field must have at least 2 tags"),
})

export const moveImageSchema = yup.object({
    source_folder_id: yup.string().required("Source folder id is required"),
    destination_folder_id: yup.string().required("Destination folder id is required"),
    images: yup.array().of(yup.string()).required("Images ids is required").min(1, "at least move one image"),
})
