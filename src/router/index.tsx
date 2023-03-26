import React, { lazy, Suspense } from 'react'
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
            <Route path={PATHS.LOGIN} element={
                <Suspense fallback={<>loading</>}>
                    <Login />
                </Suspense>
            } />
            <Route path={PATHS.SIGN_UP} element={
                <Suspense fallback={<>loading</>}>
                    <Signup />
                </Suspense>
            } />

            <Route path={PATHS.HOME} element={
                <Suspense fallback={<>loading</>}>
                    <Home />
                </Suspense>
            } />
            <Route path={PATHS.FOLDER + "/:id"} element={
                <Suspense fallback={<>loading</>}>
                    <Folder />
                </Suspense>
            } />
            <Route path={PATHS.IMAGE + "/:id"} element={
                <Suspense fallback={<>loading</>}>
                    <Image />
                </Suspense>
            } />
            <Route path={PATHS.SETTINGS} element={
                <Suspense fallback={<>loading</>}>
                    <Settings />
                </Suspense>
            } />

            <Route path={"*"} element={
                <Suspense fallback={<>loading</>}>
                    <NotFound />
                </Suspense>
            } />
        </Routes>
    )
}

export default Router