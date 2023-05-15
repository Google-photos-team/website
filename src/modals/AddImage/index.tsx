import React, { useState } from 'react'
import Button from '../../components/Button';
import ImageInput from '../../components/ImageInput';
import InputFiled from '../../components/InputFiled';
import { H5 } from '../../components/Typography';
import Style from './style'
import TagsInput from './TagsInput';
import { createImage } from '../../api/ImagesAPI';
import { createImageSchema } from '../../validation/image';
import { toast } from 'react-toastify';

interface IProps {
  folder_id: string,
  close: () => void,
  addImage: (image: Image) => void
}

const AddImage = ({ addImage, folder_id, close }: IProps) => {
  const [image, setImage] = useState("");
  const [imgTitle, setImgTitle] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handelAdd = () => {
    // TODO: VALIDATION BEFORE ADD IMAGE
    const imageData = {
      folder_id,
      image,
      name: imgTitle,
      tags
    };

    createImageSchema.validate(imageData, { abortEarly: false }).then(async () => {
      setIsLoading(true);
      try {
        const resData = await createImage(imageData);
        addImage(resData)
        toast.success("Image uploaded successfully")
      } catch (error) {
        // @ts-ignore
        toast.error(error.message as string)
      }

      setIsLoading(false);
      close();
    }).catch(({ errors }) => {
      errors.map((el: string) => toast.error(el))
    })
  }

  return (
    <Style>
      <H5 margin="0 0 0.5rem" weight={500} color="black">Upload new image</H5>
      <ImageInput
        onChange={(value) => { setImage(value) }} />

      <InputFiled
        className='image_title'
        label='Image Title'
        placeholder='title'
        onChange={(e) => { setImgTitle(e.target.value) }}
        value={imgTitle}
        fullWidth
      />

      <TagsInput
        tags={tags}
        addTag={(tag) => {
          setTags(prev => ([...prev, tag]))
        }}
        deleteTag={(tag) => {
          setTags(prev => ([...prev.filter(t => t !== tag)]))
        }}
      />

      <Button
        margin='1rem 0 0'
        fullWidth
        onClick={isLoading ? () => { } : handelAdd}
      >{isLoading ? "Uploading ..." : "Add Image"}</Button>
    </Style>
  )
}

export default AddImage