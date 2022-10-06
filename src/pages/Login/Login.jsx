import React, { useCallback } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom"

import { login } from "../../store/actions/userActions"
import { LoginForm } from "./LoginForm"

import "./Login.sass"

export const Login = () => {

    const dispatch = useDispatch()
    const { loading, error } = useSelector((state) => state.user)

    const onSubmit = useCallback((email, password) => {
        dispatch(login({email, password}))
    }, [dispatch])

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="div-login">
            <Link to="/login"><img className="logo-login" src="Lotus-logo.svg" width="200" height="250"/></Link>
            {error ? <p className="error-message"> {error} </p> : null}
            <LoginForm onSubmit={onSubmit} />
        </div>
    )
}