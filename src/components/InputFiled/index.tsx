import React, { ChangeEventHandler } from 'react'
import Input from '../Input';
import { Body1, Body2, Body3 } from '../Typography';
import Style from './style';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string,
    value: string,
    onChange: ChangeEventHandler<HTMLInputElement>,
    fullWidth?: boolean,
    error?: string,
    type?: "text" | "password" | "email",
    className?: ""
}

const InputFiled = ({ label, value, fullWidth, error, type = "text", className = "", onChange, ...rest }: IProps) => {
    return (
        <Style className={className} fullWidth={fullWidth}>
            <Body1 margin='0 0 4px'>{label}</Body1>
            <Input value={value} onChange={onChange} fullWidth={fullWidth} type={type} {...rest} />
            {error && <Body2 className="error" margin='4px 0 0' color='lightRed'>{error}</Body2>}
        </Style>
    )
}

export default InputFiled