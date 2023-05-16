import React, { useState } from 'react'
import Button from '../../../../components/Button'
import ModalV2 from '../../../../components/ModalV2'
import { H4 } from '../../../../components/Typography'
import DeleteAccount from '../../../../modals/DeleteAccount'
import ResetPassword from '../../../../modals/ResetPassword'
import Style from './style'

const DangerZone = () => {
    const [isResetPasswordModalOpen, setIsResetPasswordModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    return (
        <>
            {isResetPasswordModalOpen && <ModalV2 close={() => setIsResetPasswordModalOpen(false)}>
                <ResetPassword
                    close={() => setIsResetPasswordModalOpen(false)}
                />
            </ModalV2>}
            {isDeleteModalOpen && <ModalV2 close={() => setIsDeleteModalOpen(false)}>
                <DeleteAccount
                    close={() => setIsDeleteModalOpen(false)}
                />
            </ModalV2>}
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
                        onClick={() => { setIsDeleteModalOpen(true) }}
                    >Delete Account</Button>
                </div>
            </Style>
        </>
    )
}

export default DangerZone