import './BoardCard.sass'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export const BoardCard = ({name, onClick}) => {

    const boardStyleBackgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`;

    function getRandom(min, max) {
        return Math.ceil(Math.random() * (max - min) + min)
    }

    return (
        <Card
            onClick={() => onClick()}
            className="card-style"
        >
            <CardActionArea sx={{width: '100%', height: '100%', bgcolor: boardStyleBackgroundColor}}>
                <CardContent>
                    <Typography variant="h5" component="div">{name}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}