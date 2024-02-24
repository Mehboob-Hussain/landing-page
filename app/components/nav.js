"use client"
import React from 'react'
import { AppBar, Box, Button, Container, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DrawarNav from './drawarNav';
const NavBar = () => {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <>
            <AppBar sx={{ background: 'transparent', boxShadow: 'none', position: 'relative' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Typography  sx={{ fontStyle: 'italic', fontFamily: 'cursive' }} variant='h4' >Your logo</Typography>
                    {
                        isMatch ? (
                            <>
                                <DrawarNav />
                            </>

                        ) : (
                            <Tabs textColor="inherent" sx={{ '& .MuiTab-root': { fontWeight: 800 }, '& .MuiTab-root:hover': { color: '#FF0000' } }} >
                                <Tab label="Home" />
                                <Tab label="forum" />
                                <Tab
                                    label={
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            Services
                                            <ArrowDropDownIcon />
                                        </Box>
                                    }
                                />
                                <Tab
                                    label={
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            Resources
                                            <ArrowDropDownIcon />
                                        </Box>
                                    }
                                />
                                <Tab label="Features" />
                                <Tab label="Customers" />
                                <Tab label="Contact" />
                            </Tabs>
                        )
                    }
                </Toolbar>
            </AppBar>
        </>
    )
}

export default NavBar;