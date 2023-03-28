import React, { useState } from 'react'
import Button from '../../components/Button';
import ImageInput from '../../components/ImageInput';
import InputFiled from '../../components/InputFiled';
import { H5 } from '../../components/Typography';
import Style from './style'
import TagsInput from './TagsInput';

interface props {
  className: string,
  close: () => void,
  onClick: (e: any) => void,
  exitIcon: React.ReactNode,
}

const AddImage = ({ className, close, onClick, exitIcon }: props) => {
  const [img, setImg] = useState("");
  const [imgTitle, setImgTitle] = useState("");
  const [tags, setTags] = useState<string[]>([]);

  const handelUpdate = () => {
    // TODO: API CALL TO ADD IMAGE
    close();
  }

  return (
    <Style className={className} onClick={onClick}>
      {exitIcon}
      <H5 margin="0 0 0.5rem" weight={500} color="black">Upload new image</H5>
      <ImageInput
        onChange={(value) => { setImg(value) }} />

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
        onClick={handelUpdate}
      >Add Image</Button>
    </Style>
  )
}

export default AddImage