import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import CloseIcon from '@mui/icons-material/Close'

export const ListForm = ({
    boardSlug,
    text, 
    error,
    onChangeTextList,
    handleAddList,
    handleCloseCreateForm
    }) => {
        
    return (
        <Box className="CreateList" board={boardSlug} component="span">
            <TextField
                className="CreateList__textfield"  
                variant="filled"   
                label="Enter list title"
                multiline 
                name={text}
                error={!!error.name}
                onChange={onChangeTextList}
            />
            <Button className="CreateList__button--create" onClick={() => handleAddList()}> 
                Create list 
            </Button>
            <Button className="CreateList__button--cancel" onClick={handleCloseCreateForm}>                 
                <CloseIcon /> 
            </Button>      
        </Box>
    )
}