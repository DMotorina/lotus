import '../../BoardPage.sass'

import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CloseIcon from '@mui/icons-material/Close'

export const CreateCard = ({
    listSlug, 
    name, 
    error,
    onChangeTextCard, 
    handleClose, 
    handleAddCard
    }) => {
        
    return (
        <Box className='CreateCard' component="span" list={listSlug}>
            <TextField
                className='CreateCard__textfield' 
                variant="filled"   
                label="Enter card title"
                multiline
                value={name}
                error={!!error.name}  
                onChange={onChangeTextCard}
                />
            <Button 
                className='CreateCard__button--create' 
                onClick={() => handleAddCard()}
                > 
                    Create card
                </Button>
            <Button
                className='CreateCard__button--cancel' 
                onClick={handleClose} 
            > 
                <CloseIcon /> 
            </Button>      
        </Box> 
    )
}