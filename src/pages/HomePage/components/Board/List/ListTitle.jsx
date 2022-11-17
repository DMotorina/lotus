import { useEffect, useState } from 'react'

import TextField from '@mui/material/TextField'

export const ListTitle = ({value: initialValue, listSlug, onChange}) => {
    const [value, setValue] = useState(initialValue)

    useEffect(() => {
        setValue(initialValue)
    }, [initialValue])

    const handleOnBlur = () => {
        if(initialValue === value) return
        onChange(value, listSlug)
    }

    return (
        <TextField
            className='list-title'
            maxRows={4}
            value={value}
            onChange={event => setValue(event.target.value)}
            onBlur={handleOnBlur}
            variant="filled"
        />
    )
}