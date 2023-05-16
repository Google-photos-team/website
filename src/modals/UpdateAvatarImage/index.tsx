import React, { useState } from 'react'
import Button from '../../components/Button';
import ImageInput from '../../components/ImageInput';
import { Body1 } from '../../components/Typography';
import Style from './style'

interface props {
  close: () => void,

}

const UpdateAvatarImage = ({ close }: props) => {
  const [avatar, setAvatar] = useState("");

  const handelUpdate = () => {
    // TODO: API CALL TO UPDATE PROFILE IMAGE
    close();
  }

  return (
    <Style>
      <Body1 weight={500} color="black">Update your avatar image</Body1>
      <ImageInput
        onChange={(value) => { setAvatar(value) }} />
      <Button
        margin='1rem 0 0'
        fullWidth
        onClick={handelUpdate}
      >Update avatar</Button>
    </Style>
  )
}

export default UpdateAvatarImage