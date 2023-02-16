import '../../style.sass'

import { useState, useEffect } from 'react'

import TextField from '@mui/material/TextField'
import { Typography } from '@mui/material'

export const ListEdit = ({
    name: initialName, 
    listSlug, 
    onChange, 
    openTitle, 
    handleOpenTitle
    }) => {
        
    const [value, setValue] = useState(initialName)

    useEffect(() => {
        setValue(initialName)
    }, [initialName])

    const handleOnBlur = () => {
        if(initialName === value) 
        return onChange(value, listSlug)
    }

    return (
        <>
            {openTitle 
                ? (
                    <TextField
                        className="ListEditForm__textfield"
                        variant="filled"
                        maxRows={4}
                        value={value}
                        onBlur={handleOnBlur}
                        onChange={event => setValue(event.target.value)}
                    />
                ) : (
                    <Typography
                        className="ListEditForm__typography"
                        onClick={handleOpenTitle}
                    > 
                        {value} 
                    </Typography>
                )
            }
        </>
    )
}