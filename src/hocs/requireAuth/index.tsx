import React from 'react'
import { useAuth } from '../../contexts/authContext'
import { Navigate, useNavigate } from 'react-router';
import { PATHS } from '../../router';

const requireAuth = (Component: React.FC) => {
    const Wrapper: React.FC = () => {
        const { token } = useAuth();

        if (!token) {
            return <Navigate to={PATHS.LOGIN} />
        } else {
            return (
                <Component />
            )
        }
    }

    return Wrapper
}

export default requireAuth