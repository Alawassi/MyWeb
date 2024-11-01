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

    useEffect(() => {
        const canvas = document.getElementById('particleCanvas');
        const ctx = canvas.getContext('2d');

        // Set initial canvas size
        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        setCanvasSize(); // Initialize the size
        let particles = [];
        let particleCount = calculateParticleCount();

        class Particle {
            constructor() {
                this.reset();
                this.y = Math.random() * canvas.height;
                this.fadeDelay = Math.random() * 600 + 100;
                this.fadeStart = Date.now() + this.fadeDelay;
                this.fadingOut = false;
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.speed = Math.random() / 5 + 0.1;
                this.opacity = 1;
                this.fadeDelay = Math.random() * 600 + 100;
                this.fadeStart = Date.now() + this.fadeDelay;
                this.fadingOut = false;
            }

            update() {
                this.y -= this.speed;
                if (this.y < 0) {
                    this.reset();
                }

                if (!this.fadingOut && Date.now() > this.fadeStart) {
                    this.fadingOut = true;
                }

                if (this.fadingOut) {
                    this.opacity -= 0.008;
                    if (this.opacity <= 0) {
                        this.reset();
                    }
                }
            }

            draw() {
                ctx.fillStyle = `rgba(${255 - (Math.random() * 255 / 2)}, 255, 255, ${this.opacity})`;
                ctx.fillRect(this.x, this.y, 0.4, Math.random() * 2 + 1);
            }
        }

        function calculateParticleCount() {
            return Math.floor((canvas.width * canvas.height) / 6000);
        }

        function initParticles() {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });
            requestAnimationFrame(animate);
        }

        function onResize() {
            setCanvasSize();
            particleCount = calculateParticleCount();
            initParticles();
        }

        window.addEventListener('resize', onResize);

        initParticles();
        animate();

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', onResize);
        };
    }, []); // Empty dependency array ensures this effect runs only once

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
