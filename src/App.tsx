import React, { useState, useCallback } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import { Avatar, Collapse, Input, TextField, Typography, Box, Paper } from '@mui/material';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import { HelpOutline } from '@mui/icons-material';
import { useDropzone } from 'react-dropzone';

function App() {
  const [expand, setExpand] = useState(false);

  const onDrop = useCallback((receivedFiles:any) => {
    console.log('Accepted files:', receivedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleExpand = () => {
    setExpand(!expand);
  };

  return (
    <div>
      <div>
        <NavBar />
      </div>

      <div className="main">
        <div className="customerDetails">
          <div className="personalInfo">
            <div style={{ display: 'flex', alignItems: 'center' }} onClick={handleExpand}>
              <FormatAlignLeftIcon />
              <Typography variant='h5' gutterBottom style={{ fontWeight: 'bold', marginTop: '0.5rem' }}>
                Personal Info
              </Typography>
            </div>
            <Collapse in={expand} timeout={'auto'} unmountOnExit>
              <Typography variant='subtitle1' gutterBottom>
                Update your photo and personal details here
              </Typography>
            </Collapse>
          </div>

          <Box
            display="flex"
            flexDirection="column"
            gap={2}
            sx={{
              '@media (min-width: 800px)': {
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(22rem, 1fr))',
                gap: '1rem'
              }
            }}
          >
            <div className="marginTop">
              <Typography variant='subtitle1' gutterBottom style={{ fontWeight: 'bold' }}>
                First Name
              </Typography>
              <TextField
                placeholder='Enter your First name'
                sx={{ width: '100%' }}
              />
            </div>

            <div className="marginTop">
              <Typography variant='subtitle1' gutterBottom style={{ fontWeight: 'bold' }}>
                Last Name
              </Typography>
              <TextField
                placeholder='Enter your Last name'
                sx={{ width: '100%' }}
              />
            </div>

            <div className="marginTop">
              <Typography variant='subtitle1' gutterBottom style={{ fontWeight: 'bold' }}>
                Mobile Number
              </Typography>
              <TextField
                placeholder='Enter your mobile number'
                type='number'
                sx={{ width: '100%' }}
              />
            </div>

            <div className="marginTop">
              <Typography variant='subtitle1' gutterBottom style={{ fontWeight: 'bold' }}>
                Email address
              </Typography>
              <TextField
                placeholder='Enter your Email Address'
                sx={{ width: '100%' }}
              />
            </div>
          </Box>

          <hr style={{ marginTop: '1.5rem' }} />

          <div className="customerPhotoDetails">
            <div className="yourPhotoLogo" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant='subtitle1' gutterBottom style={{ fontWeight: 'bold', marginTop: '0.3rem' }}>
                Your Photo
              </Typography>
              <HelpOutline />
            </div>
            <div className="photoText"style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant='subtitle2' gutterBottom style={{ fontWeight: 'bold', color: 'grey' }}>
                This picture will be displayed on your profile
              </Typography>
            </div>
            <div className="photo" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Avatar src="/avatar2.jpg" sx={{ width: 80, height: 80, borderRadius: '50%' }} />
            </div>
            <div className="dropZone" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Box p={3} textAlign="center">
                <Paper variant="outlined" {...getRootProps()} sx={dropzoneStyle}>
                  <input {...getInputProps()} />
                  {isDragActive ? (
                    <Typography variant="h6">Drop the files here</Typography>
                  ) : (
                    <Typography variant="subtitle2">
                      <span style={{ color: 'blue', fontWeight: 'bold' }}>Click here to upload</span> or drag and drop
                      SVG, PNG, JPG, GIF (max 800x400 pixels)
                    </Typography>
                  )}
                </Paper>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const dropzoneStyle = {
  border: '2px dashed #aaaaaa',
  borderRadius: '4px',
  padding: '20px',
  cursor: 'pointer',
  height: '5rem',
  width: '15rem'
};

export default App;
