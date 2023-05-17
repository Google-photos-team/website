import React from 'react'
import Button from '../../components/Button';
import { Body1, Body3 } from '../../components/Typography';
import Style from './style'
import { deleteProfile } from '../../api/ProfileAPI';
import { toast } from 'react-toastify';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router';
import { PATHS } from '../../router';

interface props {
  close: () => void,
}
const DeleteAccount = ({ close }: props) => {
  const [cookies, setCookie, removeCookie] = useCookies(['auth-token']);
  const navigate = useNavigate();

  const handelDelete = () => {
    deleteProfile()
      .then(() => {
        navigate(PATHS.SIGN_UP);
        removeCookie("auth-token", { path: "/" })
        close();
      })
      .catch((error) => {
        toast.error(error.message || "Something went wrong!")
        close();
      })
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