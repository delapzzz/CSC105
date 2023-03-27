import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Content from './components/Content'
import Sidebar from './components/Sidebar'
import Rightbar from './components/Rightbar'
import { Container  } from '@mui/system'
import { Grid,Box } from '@mui/material'
function App() {

  return (
    <div className="App">
     <Box>
      <Nav />
      <Container >
        <Grid container direction="row" spacing={2} pt={5}>
          <Grid item xs={3}>
            <Sidebar />
          </Grid>
          <Grid item xs={12} md={6}>
            <Content />
          </Grid>
          <Grid item xs={3}>
            <Rightbar />
          </Grid>
        </Grid>
      </Container>
    </Box>
    </div>
    // <div className="App">
    //   <Nav/>
    //   <Box style={{display: 'flex'}}sx={{marginTop : 4}} >
    //     <Box display={{xs:"none",md:"flex"}}>
    //       <Sidebar/>
    //     </Box>

    //     <Box display={"flex"} sx={{marginRight : 2}}>
    //       <Content/>
    //     </Box>

    //     <Box display={{xs:"none",md:"flex"}} >
    //       <Rightbar/>
    //     </Box>
    //   </Box>
    // </div>
  );
}

export default App
