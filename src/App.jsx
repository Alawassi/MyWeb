import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import { Box } from '@mui/material';

import About from './component/About';
import Education from './component/Education';
import Projects from './component/Projects';
import Skill from './component/Skill';
import Home from './component/Home';
import Contact from './component/Contact';
import Navbar from './component/Navbar';
import Footer from './component/Footer';

const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    // Theme configuration
    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',  // Use 'dark' or 'light' for the mode
            background: {
                default: darkMode ? '#2f2f2f' : '#fbfbf0',  // Set the background color for each mode
            },
            text: {
                primary: darkMode ? '#f6f6dc' : '#2f2f2f', // Optionally customize text colors
            },
        },
    });

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <>
            <canvas id="particleCanvas" style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }}></canvas>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
                <Router>
                    <Box sx={{ my: 8 }}>
                        <Home />
                    </Box>
                    <Box sx={{ my: 8 }}>
                        <About />
                    </Box>
                    <Box sx={{ my: 8 }}>
                        <Education />
                    </Box>
                    <Box sx={{ my: 8 }}>
                        <Projects />
                    </Box>
                    <Box sx={{ my: 8 }}>
                        <Skill />
                    </Box>
                    <Box sx={{ my: 8 }}>
                        <Contact />
                    </Box>
                    <Box sx={{ my: 8 }}>
                        <Footer />
                    </Box>
                </Router>
            </ThemeProvider>
        </>
    );
};

export default App;
