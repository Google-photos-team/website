export interface Image {
    _id: string,
    folder_id: string,
    name: string, // image_name
    image: string, // base64 image
    tags: string[],
}