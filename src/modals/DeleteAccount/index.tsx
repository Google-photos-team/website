import React from 'react'
import Button from '../../components/Button';
import { Body1, Body3 } from '../../components/Typography';
import Style from './style'

interface props {
  close: () => void,
}
const DeleteAccount = ({ close }: props) => {
  const handelDelete = () => {
    // TODO: API CALL TO DELETE THE ACCOUNT
    // TODO: NAVIGATE TO SIGN UP PAGE AND RESET LOGIN STATE
    close();
  }

  return (
    <Style>
      <Body1 weight={500} color="black">Sure you want to delete your account?</Body1>
      <Body3 weight={300}>this action will lead to deleting your account permanently , you can't get it back later</Body3>

      <div className="buttons">
        <Button color='secondary' onClick={close}>
          No,cancel
        </Button>
        <Button color='danger' onClick={handelDelete}>
          Delete
        </Button>
      </div>
    </Style>
  )
}

export default DeleteAccount