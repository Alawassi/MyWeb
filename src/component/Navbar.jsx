import React, { useState } from 'react';
import { AppBar, Toolbar, Button, IconButton, Typography, Drawer, List, ListItem, ListItemText } from '@mui/material';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery } from '@mui/material';
import logo from "../FOTO/logo.png";


const Navbar = ({ toggleDarkMode, darkMode }) => {
    const isMobile = useMediaQuery('(max-width:600px)');
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const menuItems = [
        { text: 'Home', href: '#home' },
        { text: 'About', href: '#about' },
        { text: 'Education', href: '#education' },
        { text: 'Projects', href: '#projects' },
        { text: 'Skill', href: '#skill' },
        { text: 'Contact', href: '#contact' }
    ];

    return (
        <AppBar
            position="fixed"
            style={{
                backgroundColor: darkMode ? '#333' : 'white',
                color: darkMode ? 'white' : 'black'
            }}
        >
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    <img src={logo} alt="Logo" style={{ width: "60px", height: "60px", marginRight: "8px",borderRadius: "50%"}} />
                </Typography>

                {isMobile ? (
                    <>
                        <IconButton color="inherit" onClick={handleDrawerToggle}>
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            anchor="right"
                            open={drawerOpen}
                            onClose={handleDrawerToggle}
                        >
                            <List sx={{ width: 250 }}>
                                {menuItems.map((item, index) => (
                                    <ListItem button key={index} onClick={handleDrawerToggle} component="a" href={item.href}>
                                        <ListItemText primary={item.text} />
                                    </ListItem>
                                ))}
                                <ListItem button onClick={toggleDarkMode}>
                                    <ListItemText primary={darkMode ? 'Light Mode' : 'Dark Mode'} />
                                    {darkMode ? <WbSunnyIcon /> : <NightsStayIcon />}
                                </ListItem>
                            </List>
                        </Drawer>
                    </>
                ) : (
                    <>
                        {menuItems.map((item, index) => (
                            <Button key={index} color="inherit" href={item.href}>
                                {item.text}
                            </Button>
                        ))}
                        <IconButton color="inherit" onClick={toggleDarkMode}>
                            {darkMode ? <WbSunnyIcon /> : <NightsStayIcon />}
                        </IconButton>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
