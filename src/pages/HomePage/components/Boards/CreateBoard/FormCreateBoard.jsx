import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

export const FormCreateBoard = ({handleClose, onChangeText, error, text, handleAdd, open}) => {
    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Board's name</DialogTitle>
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
                onChange={onChangeText}
                error={!!error.name}
                helperText={error.name}
                value={text}
                />       
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={() => handleAdd()}>
                Create
            </Button>
            </DialogActions>
      </Dialog>
    )
}