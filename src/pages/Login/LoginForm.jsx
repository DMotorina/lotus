import { useState, useCallback } from "react"

export const LoginForm = ({onSubmit}) => {
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
        <form>
            <input
                type="email" 
                id="email"
                className="email-input" 
                placeholder="Enter email"
                email = {email}
                onChange={handleEmailChange}
                required
            />
            <input
                type="password" 
                id="password"
                className="password-input"  
                placeholder="Enter password"
                password = {password}
                onChange={handlePasswordChange}
                required
            />
            <button
                type="button"
                className="Submit-button"
                onClick={ () => handleSubmit() }
            >
            Submit
            </button>
        </form>
    )
}