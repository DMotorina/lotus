import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'

const ToolbarMenu = ({
    anchorElement,
    open,
    onClose,
    children
}) => {
    return (
        <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElement}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={open}
            onClose={onClose}
        >
            {children}
        </Menu>
    )
}

ToolbarMenu.Item = ({onClick, children}) => (
    <MenuItem onClick={onClick}>
        <Typography textAlign="center">{children}</Typography>
    </MenuItem>
)

export { ToolbarMenu }