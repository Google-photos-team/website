import React, { useState, useCallback, useEffect } from 'react'
import Style from './style'
// components
import { H5 } from '../../components/Typography';
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

//axios api
import axios from 'axios';

//hooks useNavigate
import { useNavigate } from 'react-router';
//useAuth context
import { useAuth } from '../../contexts/authContext';
import { AuthSignup } from '../../api/AuthAPI';
import { toast } from 'react-toastify';
import Loading from '../../components/Loading';
const Signup = () => {
    const navigate = useNavigate()
    const { setToken, token } = useAuth()
    const [data, setData] = useState({
        username: { value: "", error: "" },
        password: { value: "", error: "" },
        passwordConfirm: { value: "", error: "" },
    });

    useEffect(() => {
        if (token) {
            navigate(PATHS.HOME)
        }
    }, [])

    const [acceptTerms, setAcceptTerms] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handelInputsChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setData(prev => ({ ...prev, [e.target.name]: { value: e.target.value, error: "" } }))
    }, [setData])

    const handlerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (acceptTerms) {
            setIsLoading(true);

            AuthSignup(data.username.value, data.password.value)
                .then(token => {
                    navigate(PATHS.HOME)
                    setToken(token, true)
                }).catch((error) => {
                    toast.error(error.message)
                }).finally(() => {
                    setIsLoading(false);
                })
        } else {
            toast.warn("you have to agree on our terms and conditions first")
        }
    };

    if (isLoading) {
        return <Loading />
    }

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

                    <Button fullWidth margin='0.7rem 0' onClick={(e) => handlerSubmit}>Login</Button>
                </form>
                <CustomLink to={PATHS.LOGIN}>Already have an account?</CustomLink>
            </div>
        </Style>
    )
}

export default Signup