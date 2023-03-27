import { useState } from 'react'
import Style from './style'
import noUserImage from '../../../../assets/no_user.png';
import editImage from '../../../../assets/icons/edit.svg';
import { H4 } from '../../../../components/Typography';
import Modal from '../../../../components/Modal';
import UpdateAvatarImage from '../../../../modals/UpdateAvatarImage';
interface IProps {
    avatar?: string,
    username: string
}

const Avatar = ({ avatar, username }: IProps) => {
    const [isUpdateAvatarModalOpen, setIsUpdateAvatarModalOpen] = useState(false)
    return (
        <>
            <Modal
                Content={UpdateAvatarImage}
                close={() => setIsUpdateAvatarModalOpen(false)}
                isOpen={isUpdateAvatarModalOpen}
            />
            <Style>
                <div className="avatar_block">
                    <img className="avatar_img" src={avatar ? avatar : noUserImage} alt="user avatar" />
                    <button
                        className="avatar_edit"
                        onClick={() => setIsUpdateAvatarModalOpen(true)}>
                        <img src={editImage} alt="edit" />
                    </button>
                </div>
                <H4 weight={500} align='center' margin='1rem 0 0' transform='capitalize'>@{username}</H4>
            </Style>
        </>
    )
}

export default Avatar