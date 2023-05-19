import React,{useState} from 'react'
import Button from '../../components/Button';
import { Body1, Body3 } from '../../components/Typography';
import Style from './style'
import { deleteProfile } from '../../api/ProfileAPI';
import { toast } from 'react-toastify';
import { useAuth } from '../../contexts/authContext';

interface props {
  close: () => void,
}
const DeleteAccount = ({ close }: props) => {
  const {logout} = useAuth();
  const [loading, setLoading] = useState(false);

  const handelDelete = async() => {
    setLoading(true);
    await deleteProfile()
      .then(() => {
        logout();
        close();
      })
      .catch((error) => {
        toast.error(error.message || "Something went wrong!")
        close();
      })
    setLoading(false);
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
          {loading ? "Loading..." :"Delete"}
        </Button>
      </div>
    </Style>
  )
}

export default DeleteAccount