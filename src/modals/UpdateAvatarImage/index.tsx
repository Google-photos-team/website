import React, { useState } from 'react'
import Button from '../../components/Button';
import ImageInput from '../../components/ImageInput';
import { Body1 } from '../../components/Typography';
import Style from './style'

interface props {
  close: () => void,
  setAvatar: (value: string) => void

}

const UpdateAvatarImage = ({ close ,setAvatar}: props) => {
  const [tempAvatar, setTempAvatar] = useState("");

  const handelUpdate = () => {
    setAvatar(tempAvatar)
    close();
  }

  return (
    <Style>
      <Body1 weight={500} color="black">Update your avatar image</Body1>
      <ImageInput
        onChange={(value) => { setTempAvatar(value) }} />
      <Button
        margin='1rem 0 0'
        fullWidth
        onClick={handelUpdate}
      >Update avatar</Button>
    </Style>
  )
}

export default UpdateAvatarImage