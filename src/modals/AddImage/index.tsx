import React, { useState } from 'react'
import Button from '../../components/Button';
import ImageInput from '../../components/ImageInput';
import { Body1 } from '../../components/Typography';
import Style from './style'

interface props {
  className: string,
  close: () => void,
  onClick: (e: any) => void,
  exitIcon: React.ReactNode,
}

const AddImage = ({ className, close, onClick, exitIcon }: props) => {
  const [img, setImg] = useState("");

  const handelUpdate = () => {
    // TODO: API CALL TO ADD IMAGE
    close();
  }

  return (
    <Style className={className} onClick={onClick}>
      {exitIcon}
      <Body1 weight={500} color="black">upload new image</Body1>
      <ImageInput
        onChange={(value) => { setImg(value) }} />
      <Button
        margin='1rem 0 0'
        fullWidth
        onClick={handelUpdate}
      >Add Image</Button>
    </Style>
  )
}

export default AddImage