import { useMemo, forwardRef } from 'react'

import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'

import { convertStringToColorCode } from './UserAvatar.utils'

export const UserAvatar = forwardRef((
    {
        user: {firstName, lastName},
        tooltip = "",
        onClick
    },
    ref
) => {
    const avatarColor = useMemo(
        () => convertStringToColorCode(`${firstName}${lastName}`), 
        [firstName, lastName]
    )

    return (
        <Tooltip title={tooltip}>
            <IconButton onClick={onClick} sx={{ p: 0 }} ref={ref}>
                <Avatar sx={{bgcolor: avatarColor}}>
                    {firstName[0]}{lastName[0]}
                </Avatar>
            </IconButton>
        </Tooltip>
    )
})