import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

export const FormCreateBoard = ({
    open,
    handleClose, 
    text,  
    error, 
    handleAdd,
    onChangeText 
    }) => {
        
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle> Board's name </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Give name your board
                </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Name"
                        fullWidth
                        variant="standard"
                        value={text}
                        error={!!error.name}
                        helperText={error.name}
                        onChange={onChangeText}
                    />       
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}> Cancel </Button>
                <Button onClick={() => handleAdd()}> Create </Button>
            </DialogActions>
      </Dialog>
    )
}