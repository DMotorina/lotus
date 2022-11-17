import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import CloseIcon from '@mui/icons-material/Close'

export const CreateList = ({
    boardSlug,
    text, 
    error,
    onChangeTextList,
    handleAddList,
    handleClose
    }) => {

    return (
        <Box component="span" className='create-list' board={boardSlug}>
            <TextField 
                variant="filled"   
                label="Enter list title"
                multiline 
                name={text}
                error={!!error.name}
                onChange={onChangeTextList}
                className='create-list-textfield' 
            />
            <Button className='create-list-button' onClick={() => handleAddList()}> Create list </Button>
            <Button onClick={handleClose} className='create-list-cancel'>                 
                <CloseIcon /> 
            </Button>      
        </Box>
    )
}