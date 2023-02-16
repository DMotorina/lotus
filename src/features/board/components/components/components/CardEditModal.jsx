import '../../../style.sass'

import { useState, useEffect } from 'react'

import { alpha, styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const style = {
    position: 'absolute',
    top: '8%',
    left: '40%',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column'
}

const CardTitleTextField = styled((props) => (
    
    <TextField InputProps={{ disableUnderline: true }} {...props} />
  
    ))(({ theme }) => ({
    '& .MuiFilledInput-root': {
        border: '1px solid transparent',
        fontSize: '20px',
        fontWeight: 'bold',
        overflow: 'hidden',
        backgroundColor: theme.palette.mode === 'light' ? 'transparent' : '#2b2b2b',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
    '&:hover': {
        backgroundColor: 'transparent',
    },
    '&.Mui-focused': {
        backgroundColor: 'transparent',
        boxShadow: `${alpha(theme.palette.primary.main, 0.5)} 0 0 0 2px`,
        borderColor: theme.palette.primary.main,
    },
    },
}))

const DescriptionTextField = styled((props) => (
    
    <TextField InputProps={{ disableUnderline: true }} {...props} />
  
    ))(({ theme }) => ({
    '& .MuiFilledInput-root': {
        border: '1px solid #E8E8E8',
        fontSize: '17px',
        overflow: 'hidden',
        backgroundColor: theme.palette.mode === 'light' ? '#E8E8E8' : '#2b2b2b',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
    '&:hover': {
        backgroundColor: '#DCDCDC',
    },
    '&.Mui-focused': {
        backgroundColor: 'transparent',
        boxShadow: `${alpha(theme.palette.primary.main, 0.5)} 0 0 0 2px`,
        borderColor: theme.palette.primary.main,
    },
    },
}))

export const CardEditModal = ({
    openModal, 
    handleCloseModal, 
    name: initialValue,
    listSlug,
    onChange
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
        <Modal
            className="editCard-dialog"
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            open={openModal} 
            onClose={handleCloseModal} 
        >
            <Box sx={style}>
                <CardTitleTextField
                    id="cardTitle-input"
                    style={{ marginLeft: -5 }}
                    variant="filled"
                    value={value}
                    onBlur={handleOnBlur}
                    onChange={event => setValue(event.target.value)}
                />
                <Typography 
                    id="modal-modal-description" 
                    sx={{ 
                        mt: 2, 
                        paddingBottom: 3, 
                        paddingLeft: '5px',
                        fontSize: '20px',
                        fontWeight: 'bold',
                    }}
                >
                    Description
                </Typography>
                <DescriptionTextField
                    id="standard-multiline-static"
                    variant="filled"
                    multiline
                    rows={4}
                    placeholder="Add a more detailed description"
                />
                <Button onClick={handleCloseModal}> Delete card </Button>
            </Box>
        </Modal>
    )
}