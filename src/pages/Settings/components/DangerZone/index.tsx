import React, { useState } from 'react'
import Button from '../../../../components/Button'
import Modal from '../../../../components/Modal'
import { H4 } from '../../../../components/Typography'
import DeleteAccount from '../../../../modals/DeleteAccount'
import ResetPassword from '../../../../modals/ResetPassword'
import Style from './style'

const DangerZone = () => {
    const [isResetPasswordModalOpen, setIsResetPasswordModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    return (
        <>
            <Modal
                Content={ResetPassword}
                close={() => { setIsResetPasswordModalOpen(false) }}
                isOpen={isResetPasswordModalOpen}
            />
            <Modal
                Content={DeleteAccount}
                close={() => { setIsDeleteModalOpen(false) }}
                isOpen={isDeleteModalOpen}
            />
            <Style>
                <H4>Danger zone</H4>
                <div className="buttons">
                    <Button
                        fullWidth
                        color='danger'
                        onClick={() => { setIsResetPasswordModalOpen(true) }}
                    >Reset Password</Button>
                    <Button
                        color='danger'
                        fullWidth
                        onClick={() => {setIsDeleteModalOpen(true)}}
                    >Delete Account</Button>
                </div>
            </Style>
        </>
    )
}

export default DangerZone