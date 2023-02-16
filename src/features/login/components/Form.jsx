import '../style.sass'

import { useState, useCallback } from "react"

export const Form = ({onSubmit}) => {
    const [email, setEmail] = useState("")
    const [password, SetPassword] = useState("")

    const handleEmailChange = useCallback(event => {
        setEmail(event.target.value)
    }, [])

    const handlePasswordChange = useCallback(event => {
        SetPassword(event.target.value)
    }, [])

    const handleSubmit = useCallback(() => {
        onSubmit(email, password)
    }, [email, password])

    return (
        <form className="LoginForm">
            <input
                className="LoginForm__input"
                id="email" 
                type="email" 
                placeholder="Enter email"
                required
                email={email}
                onChange={handleEmailChange}
            />
            <input
                className="LoginForm__password"
                id="password"  
                type="password" 
                placeholder="Enter password"
                required
                password={password}
                onChange={handlePasswordChange}
            />
            <button
                className="LoginForm__button"
                type="button"
                onClick={() => handleSubmit()}
            >
                Submit
            </button>
        </form>
    )
}