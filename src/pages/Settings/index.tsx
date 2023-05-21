import React, { useEffect, useState } from 'react'
import Button from '../../components/Button'
import InputFiled from '../../components/InputFiled'
import Select from '../../components/Select'
import { Body1, H4 } from '../../components/Typography'
import Avatar from './components/Avatar'
import DangerZone from './components/DangerZone'
import Style from './style'
import requireAuth from '../../hocs/requireAuth'
import { useAuth } from '../../contexts/authContext'
import { updateProfile } from '../../api/ProfileAPI'
import { toast } from 'react-toastify'

const Settings = () => {
    const { user, setUser } = useAuth();
    const [username, setUserName] = useState(user?.username || "")
    const [avatar, setAvatar] = useState(user?.avatar || "")
    const [resolution, setResolution] = useState("high")

    const [loading, setLoading] = useState(false)
    useEffect(() => {
      setUserName(user?.username || "")
      setAvatar(user?.avatar || "")
      return () => {}
    }, [user])
    
    const handleSave = async() => {
        setLoading(true);
        await updateProfile({ username, avatar})
            .then(() => {
                setUser({ username, avatar})
                toast.success("Profile updated successfully!")
            })
            .catch((error) => {
                toast.error(error.message || "Something went wrong!")
            })
        setLoading(false);

    }
    return (
        <Style className='containerWidth'>
            <Avatar username={user?.username} avatar={avatar} setAvatar={setAvatar} />

            <div className="settings_form">
                <InputFiled
                    max={20}
                    min={5}
                    label='User name'
                    onChange={(e) => { setUserName(e.target.value) }}
                    value={username}
                    fullWidth
                />
                <div className="image_resolution">
                    <Body1 margin='1rem 0 4px'>Upload Quality</Body1>
                    <Select
                        onChange={(e) => { setResolution(e.target.value) }}
                        value={resolution}
                        fullWidth
                    >
                        <option value={"high"}>High</option>
                        <option value={"medium"}>Medium</option>
                        <option value={"Low"}>Low</option>
                    </Select>
                </div>

                <DangerZone />

                <div className="save_or_cancel">
                    <Button onClick={() => handleSave()}>{loading? "Loading..." :"Save"}</Button>
                    <Button color='secondary'>Cancel</Button>
                </div>
            </div>
        </Style>
    )
}

export default requireAuth(Settings)