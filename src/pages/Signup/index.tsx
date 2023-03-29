import React, { useState, useCallback } from 'react'
import Style from './style'
// components
import { H4, H5 } from '../../components/Typography';
// images
import LoginLargeShape from '../../assets/LoginLargeShape.svg';
import LoginSmallShape from '../../assets/LoginSmallShape.svg';
import Input from '../../components/Input';
import InputFiled from '../../components/InputFiled';
import Button from '../../components/Button';
import CustomLink from '../../components/CustomLink';
import { PATHS } from '../../router';
import CheckBox from '../../components/CheckBox';

// icons
import { FaUser } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
const Signup = () => {
    const [data, setData] = useState({
        username: { value: "", error: "" },
        password: { value: "", error: "" },
        passwordConfirm: { value: "", error: "" },
    });

    const [acceptTerms, setAcceptTerms] = useState(false);

    const handelInputsChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setData(prev => ({ ...prev, [e.target.name]: { value: e.target.value, error: "" } }))
    }, [setData])

    return (
        <Style>
            <img src={LoginLargeShape} alt="login page" className='login_left_image' />
            <img src={LoginSmallShape} alt="login page" className='login_right_image' />

            <div className="form_container">
                <H5 margin='0 0 20px' weight={700} transform="capitalize">login Into your Account</H5>
                <form>
                    <div className="input_group">
                        <FaUser className='input_group_icon' />
                        <InputFiled
                            label='User name'
                            name="username"
                            onChange={handelInputsChange}
                            value={data.username.value}
                            error={data.username.error}
                            fullWidth
                            placeholder='user name' />
                    </div>
                    <div className="input_group">
                        <RiLockPasswordFill className='input_group_icon' />
                        <InputFiled
                            label='Password'
                            name="password"
                            onChange={handelInputsChange}
                            value={data.password.value}
                            error={data.password.error}
                            fullWidth
                            type='password'
                            placeholder='password' />
                    </div>
                    <div className="input_group">
                        <RiLockPasswordFill className='input_group_icon' />
                        <InputFiled
                            label='Confirm Password'
                            name="passwordConfirm"
                            onChange={handelInputsChange}
                            value={data.passwordConfirm.value}
                            error={data.passwordConfirm.error}
                            fullWidth
                            type='password'
                            placeholder='confirm password' />
                    </div>

                    <CheckBox
                        onChange={() => setAcceptTerms(prev => !prev)}
                        value={acceptTerms}
                        label="Accept terms and conditions" />

                    <Button fullWidth margin='0.7rem 0'>Login</Button>
                </form>
                <CustomLink to={PATHS.LOGIN}>Already have an account?</CustomLink>
            </div>
        </Style>
    )
}

export default Signup