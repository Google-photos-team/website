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

const UpdateAvatarImage = ({ className, close, onClick, exitIcon }: props) => {
  const [avatar, setAvatar] = useState("");

  const handelUpdate = () => {
    // TODO: API CALL TO UPDATE PROFILE IMAGE
    close();
  }

  return (
    <Style className={className} onClick={onClick}>
      {exitIcon}
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