import React from 'react';
import { Box, Container, IconButton, Tooltip } from '@mui/material';
import {  Instagram, GitHub, LinkedIn } from '@mui/icons-material';
export default function Footer() {
    return (
        <footer>
            <Container maxWidth="md">
                <Box display="flex" justifyContent="center" alignItems="center" py={4} >
                    <Tooltip title="Instagram">
                        <IconButton color="secondary" href="https://www.instagram.com/hussein_awassi/?igsh=ejF2NXJwZWFwMjY%3D&utm_source=qr">
                            <Instagram fontSize="large" />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Github">
                        <IconButton color="default" href="https://github.com/Alawassi?tab=repositories">
                            <GitHub fontSize="large" />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="LinkedIn">
                        <IconButton color="primary" href="www.linkedin.com/in/hussein-al-awassi-a51566230">
                            <LinkedIn fontSize="large" />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Container>
        </footer>
    );
}
