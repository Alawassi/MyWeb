import './Skill.css';
import NodeJSIcon from '../FOTO/icons8-nodejs-48.png';
import reactIcon from '../FOTO/react.png';
import Grid from '@mui/material/Grid2';
import Figma from '../FOTO/figma.png';
import Workpress from '../FOTO/wordpress.png';
import docker from '../FOTO/docker.png';
import git from '../FOTO/social.png';
import sap from '../FOTO/sap.png';
import Deutschlan from '../FOTO/germany.png';
import englischlan from '../FOTO/united-kingdom.png';
import arabiclan from '../FOTO/world.png';

export default function Skill() {
    const skills = [
        { name: 'Bootstrap', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg' },
        { name: 'Figma', imageUrl: Figma },
        { name: 'WordPress', imageUrl: Workpress },
    ];

    const DevOps = [
        { name: 'Git', imageUrl: git },
        { name: 'SAP', imageUrl: sap },
        { name: 'Docker', imageUrl: docker },
    ];

    const language = [
        { name: 'Deutsch', imageUrl: Deutschlan },
        { name: 'English', imageUrl: englischlan },
        { name: 'Arabic', imageUrl: arabiclan },
    ];

    const skillsCode = [
        { name: 'Java', imageUrl: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg' },
        { name: 'Python', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
        { name: 'JavaScript', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
        { name: 'NodeJS', imageUrl: NodeJSIcon },
        { name: 'React', imageUrl: reactIcon },
        { name: 'HTML5', imageUrl: 'https://www.webreflection.co.uk/img/html5.svg' },
        { name: 'CSS3', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg' },
    ];

    return (
        <div className="container" id="skill">
            <div className="text-center">My Skills</div>
            <br />
            <Grid container spacing={1} className="skills-wrapper">
                <Grid  className="box">
                    {skillsCode.map((skill, index) => (
                        <div key={index} className="skill">
                            <img src={skill.imageUrl} alt={skill.name} className="skill-icon" />
                        </div>
                    ))}
                </Grid>

                <Grid   className="box">
                    
                    {DevOps.map((tool, index) => (
                        <div key={index} className="skill">
                            <img src={tool.imageUrl} alt={tool.name} className="skill-icon" />
                        </div>
                    ))}
                    {skills.map((skill, index) => (
                        <div key={index} className="skill">
                            <img src={skill.imageUrl} alt={skill.name} className="skill-icon" />
                        </div>
                    ))}

              
                    {language.map((lang, index) => (
                        <div key={index} className="skill">
                            <img src={lang.imageUrl} alt={lang.name} className="skill-icon" />
                        </div>
                    ))}
               </Grid>
            </Grid>
        </div>
    );
}
