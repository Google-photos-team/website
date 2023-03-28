import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router';
import Loading from '../components/Loading';
import Search from '../pages/Search';
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
    SEARCH: "search"
}

const Router = () => {
    return (
        <Routes>
            <Route path={PATHS.LOGIN} element={
                <Suspense fallback={<Loading />}>
                    <Login />
                </Suspense>
            } />
            <Route path={PATHS.SIGN_UP} element={
                <Suspense fallback={<Loading />}>
                    <Signup />
                </Suspense>
            } />

            <Route path={PATHS.HOME} element={
                <Suspense fallback={<Loading />}>
                    <Home />
                </Suspense>
            } />
            <Route path={PATHS.FOLDER + "/:id"} element={
                <Suspense fallback={<Loading />}>
                    <Folder />
                </Suspense>
            } />
            <Route path={PATHS.SEARCH} element={
                <Suspense fallback={<Loading />}>
                    <Search />
                </Suspense>
            } />
            <Route path={PATHS.IMAGE + "/:id"} element={
                <Suspense fallback={<Loading />}>
                    <Image />
                </Suspense>
            } />
            <Route path={PATHS.SETTINGS} element={
                <Suspense fallback={<Loading />}>
                    <Settings />
                </Suspense>
            } />

            <Route path={"*"} element={
                <Suspense fallback={<Loading />}>
                    <NotFound />
                </Suspense>
            } />
        </Routes>
    )
}

export default Router