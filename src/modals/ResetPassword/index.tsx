import React, { useState } from 'react'
import Button from '../../components/Button';
import InputFiled from '../../components/InputFiled';
import Style from './style'

interface IProps {
  close: () => void,
}

const ResetPassword = ({ close }: IProps) => {
  const [isFirstStep, setIsFirstStep] = useState(true);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleNext = () => {
    // TODO: API CALL TO CHECK THE PASSWORD
    setIsFirstStep(false);
  }

  const handleUpdate = () => {
    // TODO: API CALL TO UPDATE THE PASSWORD
    close();
  }

  return <Style>
    {isFirstStep ? <>
      <InputFiled
        label='Current Password'
        name="folderName"
        onChange={(e) => setCurrentPassword(e.target.value)}
        value={currentPassword}
        fullWidth
        type='password'
        placeholder='name' />

      <Button margin="1rem 0 0" onClick={handleNext}>
        Next
      </Button>
    </> :
      <>
        <InputFiled
          label='New password'
          onChange={(e) => setNewPassword(e.target.value)}
          value={newPassword}
          fullWidth
          type='password'
          placeholder='new password' />

        <InputFiled
          className='confirm_password'
          label='Confirm Password'
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
          fullWidth
          type='password'
          placeholder='confirm password' />

        <Button onClick={handleUpdate}>
          Update Password
        </Button>
      </>
    }
  </Style>
}

export default ResetPassword