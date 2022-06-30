

import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

import {MainBox} from './StyledComponents'

import ForCastTable from './ForCastTable'





export default function Home({weatherData}){


    return(
        <>
            <MainBox>
                    <Paper elevation={3}
                        sx={{
                            width: "80%",
                            textAlign:"left",
                            padding:"30px"
                        }}
                    >
                        <Typography variant="h4" gutterBottom component="div"
                            sx={{textAlign:"center"}}
                        >
                             24 Hour Forcast 
                        </Typography>
                        <ForCastTable
                            
                            weatherData={weatherData}
                        />
                    </Paper>
            </MainBox>
        </>
    )
}