import React from 'react'
import { Avatar, Box, Button, Card, CardActions, CardContent, Grid, Icon, Link, Typography } from '@mui/material'
const Testimonials = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2rem', py: '4rem', marginLeft: '10rem', marginRight: '10rem' }}>
            <Box>

                <Typography variant='h3' sx={{ fontWeight: 'bold', textAlign: 'center' }}>Testimonials</Typography>
                <Typography variant='body1' >Lorem ipsum sit omet,consectuer elit,sed do elamod tempor inciddunt ur labore</Typography>
                <Typography variant='body1' sx={{ textAlign: 'center' }}> neoe enim ispam voluptatem quie coluptas.<br /><Link href="#" >Read more</Link></Typography>

            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "center", flexWrap: 'wrap', gap: '3rem' }} >
                <Box sx={{}}>
                    <Card sx={{ maxWidth: 290, height: 200, borderTopLeftRadius: '50px', borderBottomRightRadius: '50px', backgroundColor: '#FFCAD4', py: '2rem' }}>
                        <CardContent>
                            <Typography variant="body2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                            </Typography>
                            <Box sx={{ display: 'flex', gap: '8px', py: '2rem' }}>
                                <Avatar alt="Remy Sharp" src="/myimg.jpeg" />
                                <Box>
                                    <Typography variant="h5" component="div">
                                        John Doe
                                    </Typography>
                                    <Typography variant="text" component="div">
                                        MArketing Head
                                    </Typography>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Box>

                <Box sx={{}}>
                    <Card sx={{ maxWidth: 290, height: 200, borderTopLeftRadius: '50px', borderBottomRightRadius: '50px', backgroundColor: '#FFCAD4', py: '2rem' }}>
                        <CardContent>
                            <Typography variant="body2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                            </Typography>
                            <Box sx={{ display: 'flex', gap: '8px', py: '2rem' }}>
                                <Avatar alt="Remy Sharp" src="/myimg.jpeg" />
                                <Box>
                                    <Typography variant="h5" component="div">
                                        Jack Ryan
                                    </Typography>
                                    <Typography variant="text" component="div">
                                        web developer
                                    </Typography>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Box>
                <Box sx={{}}>
                    <Card sx={{ maxWidth: 290, height: 200, borderTopLeftRadius: '50px', borderBottomRightRadius: '50px', backgroundColor: '#FFCAD4', py: '2rem' }}>
                        <CardContent>
                            <Typography variant="body2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                            </Typography>
                            <Box sx={{ display: 'flex', gap: '8px', py: '2rem' }}>
                                <Avatar alt="Remy Sharp" src="/myimg.jpeg" />
                                <Box>
                                    <Typography variant="h5" component="div">
                                        Jenna Thomas
                                    </Typography>
                                    <Typography variant="text" component="div">
                                        Business Developer
                                    </Typography>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Box>
            </Box>
        </Box>
    )
}

export default Testimonials;