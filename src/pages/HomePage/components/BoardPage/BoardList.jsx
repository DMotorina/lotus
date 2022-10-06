
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'
import CommentIcon from '@mui/icons-material/Comment'

export const BoardList = () => {
  
    return (
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
        {[0, 1, 2, 3].map((value) => {
          const labelId = `checkbox-list-label-${value}`
          return (
            <div className='List-board'>
                <ListItem
                    key={value}
                    secondaryAction={
                    <IconButton edge="end" aria-label="comments">
                    <CommentIcon />
                    </IconButton>
                }
                disablePadding
                >
                <ListItemButton role={undefined} dense>
                    <ListItemText id={labelId} primary={`Card item # ${value + 1}`} />
                </ListItemButton>
                </ListItem>
            </div>
          )
        })}
      </List>
    )
}