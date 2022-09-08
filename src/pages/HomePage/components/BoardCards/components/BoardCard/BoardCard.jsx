import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export const BoardCard = ({name, onClick}) => {
    return (
        <Card
            onClick={() => onClick()}
            sx={{ width: 275, height: 200, marginTop: 5, backgroundColor: 'green' }}
        >
            <CardActionArea sx={{width: '100%', height: '100%'}}>
                <CardContent>
                    <Typography variant="h5" component="div">{name}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}