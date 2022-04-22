import React,{useState} from 'react'
import {Card,CardMedia,Button,Typography,Grid,TextField} from '@mui/material'

function Cards({flower}) {
    const [count, setCount]=useState(0)
  return (
    <div className='card-container'>
    <Card sx={{maxWidth:300}}  className="card">
        <CardMedia
        component="img" height="360"
        image={flower.image}
        />
        <Typography color="#8e4e84" fontSize="18px"fontWeight="bold">
            {flower.name}
        </Typography>
        <Grid container spacing={2}>
         <Grid item xs={4}>
         <Button variant="contained" onClick={()=>setCount(count>1? count -1 : 1)} color="action"
      >Minus One</Button>
      </Grid>
         <Grid item xs={4}>
           <TextField id="text" value={count} sx={{ width: '8ch' }}/>
           </Grid>   
         <Grid item xs={4}> 
          <Button variant="contained" color="action"
        onClick={()=>setCount(count +1)}
      >One More</Button>
      </Grid>
      </Grid>
    </Card>
    </div>
  )
}

export default Cards