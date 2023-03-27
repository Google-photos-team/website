import React, { useState } from 'react'
import Button from '../../components/Button'
import InputFiled from '../../components/InputFiled'
import Select from '../../components/Select'
import { Body1, H4 } from '../../components/Typography'
import Avatar from './components/Avatar'
import DangerZone from './components/DangerZone'
import Style from './style'

const Settings = () => {
    const [userName, setUserName] = useState("abdQaddora")
    const [resolution, setResolution] = useState("high")
    return (
        <Style className='containerWidth'>
            <Avatar username={userName} />

            <div className="settings_form">
                <InputFiled
                    max={20}
                    min={5}
                    label='User name'
                    onChange={(e) => { setUserName(e.target.value) }}
                    value={userName}
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
                    <Button>Save</Button>
                    <Button color='secondary'>Cancel</Button>
                </div>
            </div>
        </Style>
    )
}

export default Settings