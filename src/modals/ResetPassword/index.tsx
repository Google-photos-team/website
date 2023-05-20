import React, { useState } from 'react'
import Button from '../../components/Button';
import InputFiled from '../../components/InputFiled';
import Style from './style'
import { resetPassword } from '../../api/AuthAPI';
import { toast } from 'react-toastify';
import { resetPasswordSchema } from '../../validation/authValidation';

interface IProps {
  close: () => void,
}

const ResetPassword = ({ close }: IProps) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleUpdate = async() => {
    // TODO: API CALL TO UPDATE THE PASSWORD
    if(newPassword !== confirmPassword) return toast.error("Password does not match");
    
    setLoading(true);
    await resetPasswordSchema.validate({password: newPassword, confirmPassword})
    .then(async() => {

      await resetPassword(currentPassword, newPassword)
      .then(() => {
        toast.success("Password updated successfully");
        close();
      })
    }).catch((err) => {
      toast.error(err.message);
    })
    
    setLoading(false);
    
  }

  return <Style>
        <InputFiled
          label='Current Password'
          name="folderName"
          onChange={(e) => setCurrentPassword(e.target.value)}
          value={currentPassword}
          fullWidth
          type='text'
          placeholder='Current Password' />

        <InputFiled
          label='New password'
          onChange={(e) => setNewPassword(e.target.value)}
          value={newPassword}
          fullWidth
          type='text'
          placeholder='new password' />

        <InputFiled
          className='confirm_password'
          label='Confirm Password'
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
          fullWidth
          type='text'
          placeholder='confirm password' />

        <Button onClick={handleUpdate}>
          {loading ? "Loading..." :"Update Password"}
        </Button>
  </Style>
}

export default ResetPassword