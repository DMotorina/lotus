import './BoardPage.sass'

import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CloseIcon from '@mui/icons-material/Close'

export const CreateCard = ({
    listSlug, 
    name, 
    error, 
    handleClose, 
    onChangeTextCard, 
    handleAddCard
    }) => {
        
    return (
        <Box component="span" className='create-card' list={listSlug}>
            <TextField 
                variant="filled"   
                label="Enter card title"
                multiline  
                className='create-card-textfield'
                onChange={onChangeTextCard}
                value={name}
                error={!!error.name}
                />
            <Button 
                className='create-card-button' 
                onClick={() => handleAddCard()}
                > 
                    Create card
                </Button>
            <Button 
            onClick={handleClose} 
            className='create-card-cancel'
            > 
                <CloseIcon /> 
            </Button>      
        </Box> 
    )
}