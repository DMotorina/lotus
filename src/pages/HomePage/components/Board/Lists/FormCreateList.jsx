import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'

export const FormCreateList = ({handleClose, open, error, text, onChangeTextList, handleAddList}) => {

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>List's name</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            fullWidth
            variant="standard"
            onChange={onChangeTextList}
            error={!!error.name}
            helperText={error.name}
            value={text}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => handleAddList()}>Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}