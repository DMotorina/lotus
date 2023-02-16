import "./style.sass"

import { useCallback } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom"

import { login } from "./actions"

import { Form } from "./components/Form"

import Box from '@mui/material/Box'

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
        <Box className="Login">
            <Link to="/login">
                <img 
                    className="Login__login" 
                    src="Lotus-logo.svg" 
                    width="200" 
                    height="250" 
                    alt="Logo"
                />
            </Link>
            {error ? <p className="error-message"> {error} </p> : null}
            <Form onSubmit={onSubmit} />
        </Box>
    )
}