import '../BoardPage.sass'

import { useState } from 'react'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

export const CreateList = () => {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  
  const handleClose = () => {
    setOpen(false)
  }

  return (
      <>  
        {open 
          ? (       
            <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
              <TextField label="Enter list title" variant="outlined" />
              <Button>Create</Button>
              <Button onClick={handleClose}> Cancel </Button>      
            </Box> 
          ):(
            <Button 
                variant="outlined" 
                className='button-add' 
                onClick={handleClickOpen}
            > 
              Add list 
            </Button>
          )}
      </>
  )
}