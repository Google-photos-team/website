import React, { useState, useCallback } from 'react'
import Style from './style'
// components
import { H5 } from '../../components/Typography';
import InputFiled from '../../components/InputFiled';
import Button from '../../components/Button';
import CustomLink from '../../components/CustomLink';
import CheckBox from '../../components/CheckBox';
// images
import LoginLargeShape from '../../assets/LoginLargeShape.svg';
import LoginSmallShape from '../../assets/LoginSmallShape.svg';

import { PATHS } from '../../router';

// icons
import { FaUser } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { useAuth } from '../../contexts/authContext';

const Login = () => {
    const navigate = useNavigate()
    const {setToken}= useAuth()
    const [data, setData] = useState({
        username: { value: "", error: "" },
        password: { value: "", error: "" },
    });
    
    
    const handlerSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        axios
        .post('https://image-project.onrender.com/auth/login', {
                username: data.username.value,
                password: data.password.value
              })
        .then( (response) => {
            navigate(PATHS.HOME)
            setToken(response.data.data.token,isRememberMeOn)
        })
        .catch( (error) => {
            console.log(error.message)
        });
      };
    
    const [isRememberMeOn, setIsRememberMeOn] = useState(false);

    const handelInputsChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setData(prev => ({ ...prev, [e.target.name]: { value: e.target.value, error: "" } }))
    }, [setData])

    return (
        <Style>
            <img src={LoginLargeShape} alt="login page" className='login_left_image' />
            <img src={LoginSmallShape} alt="login page" className='login_right_image' />

            <div className="form_container">
                <H5 margin='0 0 20px' weight={700} transform="capitalize">login Into your Account</H5>
                <form onSubmit={handlerSubmit}>
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

                    <CheckBox
                        onChange={() => setIsRememberMeOn(prev => !prev)}
                        value={isRememberMeOn}
                        label="Remember Me" />                       
                    <Button fullWidth margin='0.7rem 0' onClick={(e)=>{handlerSubmit}}>Login</Button>
                </form>
                <CustomLink to={PATHS.SIGN_UP}>Don't have an account?</CustomLink>
            </div>
        </Style>
    )
}

export default Login