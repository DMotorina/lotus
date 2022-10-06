import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import {createBoards} from "../../../../../../store/actions/boardAction.js"

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

export const FormName = () => {
  const navigate = useNavigate()

  const { error } = useSelector((state) => state.board)

  const dispatch = useDispatch()

  const [open, setOpen] = useState(false)
  const [text, setText] = useState("") 

  const onChangeText = (event) => {  
    setText(event.target.value)
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleAdd = (name) => {
    dispatch(createBoards({name: text}))
      .then(data => {
        if(!data.error) {
          navigate(`board/${data.payload.slug}`)
        }
      })
  }

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen} >
        Create board
      </Button>
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

    </>
  )
}