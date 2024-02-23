import React, { useState,useCallback } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import { Avatar, Collapse, Input, TextField, Typography,Box,Paper } from '@mui/material';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import { HelpOutline } from '@mui/icons-material';
import { useDropzone } from 'react-dropzone';

function App() {

  const [expand,setExpand] = useState(false);
  
  const onDrop = useCallback((acceptedFiles: any) => {
    // Do something with the uploaded files (e.g., send them to a server)
    console.log('Accepted files:', acceptedFiles);
  }, []);
  
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const handleExpand=()=>
  {
    setExpand(!expand)
  }

  return (
    <div>
      <div>
      <NavBar/>
      </div>
      
      <div className="main">
        <div className="customerDetails">
          <div className="personalInfo"  >
            <div style={{display:'flex',alignItems:'center'}} onClick={handleExpand}>
              <FormatAlignLeftIcon/>
              <Typography variant='h5' gutterBottom style={{fontWeight:'bold',marginTop:'0.5rem'}}>
                Personal Info
              </Typography>
            </div>
            <Collapse in={expand} timeout={'auto'} unmountOnExit>
            <Typography variant='subtitle1' gutterBottom>
              Update your photo and personal details here
            </Typography>
            </Collapse>
          </div>
          <div className="inputFields">
            <div className="marginTop">
            <Typography variant='subtitle1' gutterBottom style={{fontWeight:'bold'}}>
              First Name
            </Typography>
            <TextField
            placeholder='Enter your First name'
            sx=
            {{
                width:'100%',
                '@media (min-width: 600px)':{
                  width:'22rem',
                },
            }}
            />
            </div>
            <div className="marginTop">
            <Typography variant='subtitle1' gutterBottom style={{fontWeight:'bold'}}>
              Last Name
            </Typography>
            <TextField
            placeholder='Enter your Last name'
            sx=
            {{
                width:'100%',
                '@media (min-width: 600px)':{
                  width:'22rem',
                },
            }}
            />
            </div>
            <div className="marginTop">
            <Typography variant='subtitle1' gutterBottom style={{fontWeight:'bold'}}>
              Mobile Number
            </Typography>
            <TextField
            placeholder='Enter your mobile number'
            type='number'
            sx=
            {{
                width:'100%',
                '@media (min-width: 600px)':{
                  width:'22rem',
                },
            }}
            />
            </div>
            <div className="marginTop">
            <Typography variant='subtitle1' gutterBottom style={{fontWeight:'bold'}}>
              Email address
            </Typography>
            <TextField
            placeholder='Enter your Email Address'
            sx=
            {{
                width:'100%',
                '@media (min-width: 600px)':{
                  width:'22rem',
                },
            }}
            />
            </div>
          </div>
        </div>
        <hr style={{marginTop:'1.5rem'}}/>
        <div className="customerPhotoDetails">
            <div className="yourPhotoLogo" style={{display:'flex',alignItems:'center'}}>
              <Typography variant='subtitle1' gutterBottom style={{fontWeight:'bold',marginTop:'0.3rem'}}>
                Your Photo
              </Typography>
              <HelpOutline/>
            </div>
            <div className="photoText">
            <Typography variant='subtitle2' gutterBottom style={{fontWeight:'bold',color:'grey'}}>
                This picture will be displayed on your profile
              </Typography>
            </div>
            <div className="photo">
            <Avatar src="/avatar2.jpg" sx={{ width: 80, height: 80, borderRadius: '50%' }} />
            </div>
            <div className="dropZone" >
              <Box p={3} display="flex" alignItems="center" justifyContent="center" textAlign="center">
              <Paper variant="outlined" {...getRootProps()} sx={dropzoneStyle}>
              <input {...getInputProps()} />
              {isDragActive ? (
              <Typography variant="h6">Drop the files here</Typography>
              ) : (
              <Typography variant="subtitle2">
                <span style={{color:'blue',fontWeight:'bold'}}>Click here to upload</span>  or drag and drop
                SVG,PNG,GPG,GIF(max 800x400 pixels)
              </Typography>
              )}
            </Paper>
            </Box>
            </div>
        </div>
      </div>
    </div>
  );
}

const dropzoneStyle=
{
  border: '2px 10rem #aaaaaa',
  borderRadius: '4px',
  padding: '20px',
  cursor: 'pointer',
  height: '5rem',
  width: '15rem'
}
export default App;
