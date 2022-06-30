
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';



export default function BasicTable({weatherData}) {




  const d = new Date();
  let hour = d.getHours()
  
console.log(weatherData)


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Next 12 Hours:</TableCell>
            {
                weatherData.map(time=>(
                    <TableCell 
                    key={time.timepoint}
                    align="right"
                    >
                     {time.timepoint + hour}:00
                    </TableCell>
                ))
            }
          </TableRow>
        </TableHead>
        <TableBody>
          
            <TableRow>
              <TableCell component="th" scope="row">
               Temperature
              </TableCell>
              {weatherData.map(temp=>(
                  <TableCell 
                  key={temp.timepoint}
                    align="right">
                        
                        {temp.temp2m* 9 / 5 + 32} F
                     
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
               Cloud Cover
              </TableCell>
              {weatherData.map(cloud=>(
                  <TableCell 
                    align="right"
                    key={cloud.timepoint}
                    >{cloud.cloudcover}
                    
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
               Precipitation
              </TableCell>
              {weatherData.map(prec=>(
                  <TableCell 
                    align="right"
                    key={prec.timepoint}
                    >
                    {prec.prec_type==="none"?<WbSunnyIcon sx={{color:"orange"}}/>:<ThunderstormIcon sx={{color:"grey"}}/>}
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
               Wind Speed
              </TableCell>
              {weatherData.map(wind=>(
                  <TableCell 
                  key={wind.timepoint}
                    align="right">{wind.wind10m.speed}
                     
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
               Wind Direction
              </TableCell>
              {weatherData.map(wind=>(
                  <TableCell 
                    align="right"
                    key={wind.timepoint}
                    >{wind.wind10m.direction}
                     
                </TableCell>
              ))}
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
