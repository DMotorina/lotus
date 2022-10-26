import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'
import CommentIcon from '@mui/icons-material/Comment'

export const Cards = ({cards}) => {

    return cards.map(({slug, name}) => (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'transparent' }}>
            <ListItem
                key={slug}
                disableGutters
                secondaryAction={
                <IconButton aria-label="comment">
                    <CommentIcon />
                </IconButton>
                }
            >
                <ListItemText primary={`${name}`} />
            </ListItem>
        </List>   
    ))
}