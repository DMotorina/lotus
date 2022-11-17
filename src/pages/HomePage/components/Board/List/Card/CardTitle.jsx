import { useState, useEffect } from 'react'

import MUListItemText from '@mui/material/ListItemText'

export const CardTitle = ({primary: initialValue, primary, listSlug, onChange}) => {
    const [value, setValue] = useState(initialValue)

    useEffect(() => {
        setValue(initialValue)
    }, [initialValue])

    const handleOnBlur = () => {
        if(initialValue === value) return
        onChange(value, listSlug)
    }

    return (
        <MUListItemText 
            primary={primary} 
            onChange={event => setValue(event.target.value)}
            onBlur={handleOnBlur}    
        />
    )
}