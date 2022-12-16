import '../HomePage.sass'

import Card from '@mui/material/Card'
import { CardActionArea } from '@mui/material'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

export const BoardCard = ({name, onClick}) => {

    return (
        <Card
            className="BoardCard"
            onClick={() => onClick()}
        >
            <CardActionArea sx={{width: '100%', height: '100%', fontFamily: 'Times New Roman'}}>
                <CardContent>
                    <Typography variant="h5" component="div"> {name} </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}