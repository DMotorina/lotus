import { useState, useRef } from 'react'

import { UserAvatar } from "../UserAvatar/UserAvatar"
import { ToolbarMenu } from './ToolbarMenu'

import Box from '@mui/material/Box'

export const AvatarToolbar = ({firstName, lastName, logout}) => {
    const ref = useRef()
    const [open, setOpen] = useState(false)

    return (
        <Box sx={{ flexGrow: 0 }}>
            <UserAvatar
                ref={ref}
                user={{firstName: firstName, lastName: lastName}}
                onClick={() => setOpen(!open)}
                tooltip="Open settings"
            />
            <ToolbarMenu 
                anchorElement={ref.current}
                open={open}
                onClose={() => setOpen(false)}
            >
                <ToolbarMenu.Item>Profile</ToolbarMenu.Item>
                <ToolbarMenu.Item>Dashboards</ToolbarMenu.Item>
                <ToolbarMenu.Item onClick={logout}>Log out</ToolbarMenu.Item>
            </ToolbarMenu>
      </Box>
    )
}
