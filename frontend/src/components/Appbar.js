// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';

// const Appbar = () => {
//     return ( 
//     <div>
//       <Box sx={{ flexGrow: 1 }} >
//         <AppBar position="static" className='appbar'>
//             <Typography variant="h2" color="inherit" component="div" align='center'>
//               Survey
//             </Typography>
//         </AppBar>
//       </Box>
//     </div>
    
//     );
// }
 
// export default Appbar;

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';


const Appbar = () => {
    return ( 
    <div>
      <Box sx={{ flexGrow: 1 }}  >
        <AppBar position="static" className='appbar' style = {{backgroundColor:"#DC0000"}}>
            <Toolbar className='toolbar-with-image'>
            </Toolbar>
        </AppBar>
      </Box>
    </div>
    
    );
}
 
export default Appbar;





