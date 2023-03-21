import React, { lazy } from 'react'
import { Route, Routes } from 'react-router';
// pages
const Login = lazy(() => import("../pages/Login"));
const Home = lazy(() => import("../pages/Home"));
const Folder = lazy(() => import("../pages/Folder"));
const Image = lazy(() => import("../pages/Image"));
const Settings = lazy(() => import("../pages/Settings"));
const Signup = lazy(() => import("../pages/Signup"));
const NotFound = lazy(() => import("../pages/NotFound"));

export const PATHS = {
    HOME: "/",
    LOGIN: "/login",
    FOLDER: "/folder",
    IMAGE: "/image",
    SETTINGS: "/settings",
    SIGN_UP: "/signup",
}

const Router = () => {
    return (
        <Routes>
            <Route path={PATHS.LOGIN} element={<Login />} />
            <Route path={PATHS.SIGN_UP} element={<Signup />} />

            <Route path={PATHS.HOME} element={<Home />} />
            <Route path={PATHS.FOLDER + "/:id"} element={<Folder />} />
            <Route path={PATHS.IMAGE + "/:id"} element={<Image />} />
            <Route path={PATHS.SETTINGS} element={<Settings />} />

            <Route path={"*"} element={<NotFound />} />
        </Routes>
    )
}

export default Router