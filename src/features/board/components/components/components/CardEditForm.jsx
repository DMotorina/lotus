import '../../../style.sass'

import { useState, useEffect } from 'react'

import TextField from '@mui/material/TextField'
import { Typography } from '@mui/material'
import { Button } from '@mui/material'
import { Box } from '@mui/system'
import EditIcon from '@mui/icons-material/Edit'
import CloseIcon from '@mui/icons-material/Close'

export const CardEditForm = ({
    openForm, 
    name: initialName, 
    listSlug, 
    onChange, 
    handleCloseForm,
    handleOpenModal,
    handleOpenForm
    }) => {
        
    const [value, setValue] = useState(initialName)

    useEffect(() => {
        setValue(initialName)
    }, [initialName])

    const handleOnBlur = () => {
        if(initialName === value) return
        onChange(value, listSlug)
    }

    return (
        <>
        {openForm 
            ? (
                <Box sx={{width: "100%", height: "100%", zIndex: "1"}}>
                    <TextField
                        maxRows={4}
                        value={value}
                        onBlur={handleOnBlur}
                        onChange={event => setValue(event.target.value)}
                    />
                    <Button> 
                        Save 
                    </Button>
                    <Button onClick={handleCloseForm}>
                        <CloseIcon /> 
                    </Button>
                </Box>
            ) : (
                <Box sx={{width: "100%", display: "flex"}}>
                    <Typography
                        className="Card__typography" 
                        onClick={handleOpenModal}
                    >
                        {value} 
                    </Typography>
                    <Button onClick={handleOpenForm}> 
                        <EditIcon /> 
                    </Button>
                </Box>
            )}
        </>
    )
}