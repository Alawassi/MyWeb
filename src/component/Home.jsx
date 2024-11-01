import React, { useEffect } from 'react';
import './Home.css';

import Footer from "./Footer";
import { Box, Container, Typography } from "@mui/material";

export default function Home() {
    useEffect(() => {
        const animatedElements = document.querySelectorAll('.has-animation');
        animatedElements.forEach((element) => {
            const delay = element.getAttribute('data-delay');
            setTimeout(() => {
                element.classList.add('animate-in');
            }, delay);
        });
    }, []);

    return (
        <>

            <Box id="home">
            <Container
                maxWidth="md"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: { xs: 3, md: 5 },
                    textAlign: 'center',
                    height: '100vh',


                }}
            >
                <Box className="heading"  mb={4}>
                    <Box className="has-animation animation-ltr" data-delay="10">
                        <Typography variant="h3" component="p" className="bigger" gutterBottom>
                            Hey THERE!
                        </Typography>
                    </Box>
                    <Box className="has-animation animation-rtl" data-delay="20">
                        <Typography variant="h4" component="p" className="bigger">
                            WELCOME TO MY PORTFOLIO
                        </Typography>
                    </Box>
                </Box>
                <Footer />
            </Container>
            </Box>
        </>
    );
}
