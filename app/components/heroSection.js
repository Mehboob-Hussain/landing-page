import React from 'react'
import { AppBar, Box, Button, Container, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import NavBar from './nav';
const HeroSection = () => {
  return (
    <>
      <Box sx={{ background: '#201658' }}>
        <NavBar />
        <Box sx={{ color: '#fff', py: 8, display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', '@media (max-width: 768px)': { gap: '0.5rem', px: '4rem' } }}>
            <Typography variant='h5'>Free Open Source</Typography>
            <Typography variant='h2' sx={{ '@media (max-width: 768px)': { fontSize: '3rem' } }}>
              Reservation and<br />
              Booking System<br />
              For Hotels
            </Typography>
            <Typography variant='body1'>Take your Hotel Business Online with the help of us</Typography>
            <Box sx={{ display: 'flex', gap: '1rem' }}>
              <Button variant="contained" size="large" sx={{
                borderRadius: '20px', color: '#000', px: '20px', backgroundColor: '#15F5BA', '&:hover': {
                  backgroundColor: '#15F5BA',
                },
                '&:active': {
                  backgroundColor: '#FF407D',
                },
              }}>View Demo  <ChevronRightOutlinedIcon /></Button>
              <Button variant="text" sx={{ borderRadius: '20px', borderWidth: '2px', borderStyle: 'solid', color: '#fff', px: '20px' }}>Download</Button>
            </Box>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <img src="/login-hero.svg" alt="Login Hero" width="400" height="400" />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          maxWidth: '70rem',
          borderRadius: '20px',
          backgroundColor: '#F9E8C9',
          p: 6,
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          alignItems: 'center',
          position: 'relative',
          top: { md: '-30%' },
          left: { md: '50%' },
          transform: { md: 'translate(-50%, -30%)' }
        }}
      >

        <Typography variant='h5' sx={{ fontWeight: 'bold' }}>We Got Featured !</Typography>
        <Typography variant='body1'>We got mentioned and listed on various platforms. You can find us here.</Typography>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-around', gap: { xs: '1rem', md: '5rem' } }}>
          <Typography sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, color: '#4caf50' }}>Capterra</Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, color: '#2196f3' }}>GoodFirms</Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, color: '#2196f3' }}>Softwate Suggests</Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}>techjockey</Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: '2rem', md: 0 }, py: { xs: '10px', md: 0 }, justifyContent: 'space-around', margin: '0 6rem' }}>
        <Box sx={{ textAlign: 'center' }}>
          <Box >
            <Typography variant="h2" >
              25,<span style={{ backgroundColor: '#ff4d4d', borderRadius: '50%', padding: '10px' }}>00</span>0+
            </Typography>
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Downloads
          </Typography>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <Box >
            <Typography variant="h2" >
              1<span style={{ backgroundColor: '#FFBB64', borderRadius: '50%', padding: '10px' }}>20</span>+
            </Typography>
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Countries
          </Typography>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <Box >
            <Typography variant="h2" >
              10,<span style={{ backgroundColor: '#40A2E3', borderRadius: '50%', padding: '10px' }}>00</span>0+
            </Typography>
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Users
          </Typography>
        </Box>

      </Box>
    </>
  )
}

export default HeroSection