import { useState, useEffect } from 'react'

import UIModal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import EditIcon from '@mui/icons-material/Edit'
import { TextField } from '@mui/material'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'transparent',
    border: '2px solid transparent',
    p: 4,
    display: 'flex',
    flexDirection: 'column'
}

const styleTextFiled = {
    background: '#FFFFFF',
    borderRadius: '5px',
    borderColor: 'none'
}

const styleButton = {
    background: '#A7C4D4',
    color: 'white'
}

export const EditTextCard = ({
    name: initialValue, 
    listSlug,
    onChange,
    openEdit,
    handleCloseEdit
    }) => {

    const [value, setValue] = useState(initialValue)
    
    useEffect(() => {
        setValue(initialValue)
    }, [initialValue])

    const handleOnBlur = () => {
        if(initialValue === value) return
        onChange(value, listSlug)
    }

    return (
        <>
        <UIModal
            open={openEdit}
            onClose={handleCloseEdit}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <TextField
                    sx={styleTextFiled}
                    multiline
                    rows={3}
                    variant="filled"                    
                    value={value}
                    onChange={event => setValue(event.target.value)}
                    onBlur={handleOnBlur}
                />
                <Button sx={styleButton} onClick={handleCloseEdit}>Save</Button>
            </Box>
        </UIModal>
        </>
    )
}