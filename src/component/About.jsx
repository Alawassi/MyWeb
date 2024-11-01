import './About.css';
import Button from '@mui/material/Button';
import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated';
import CV from "../PDF/H-CV.pdf";


export default function About() {
  const styles = {
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: '"Arial", sans-serif',
      lineHeight: '1.6',
      borderRadius: '8px',
    },
    paragraph: {
      marginBottom: '15px',
      fontSize: '16px',
      
    },
    header: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '20px',
      textAlign: 'center',
    },
  };

  const onButtonClickCV= () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "online_CU.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
    <div className="heading" id="about">
        <div style={styles.container}>
          <div className="text-center" style={{
            fontSize: '1.5em',
            fontWeight: "bold",}}
          >
            About Me
          </div>

          <p style={styles.paragraph}>
            Welcome to my personal portfolio! My name is Hussein Al Awassi, and I am currently studying
            Business Informatics at Otto-von-Guericke University Magdeburg.
            With a passion for programming and web development, I am constantly working to expand my knowledge and
            skills.
          </p>
          <p style={styles.paragraph}>
            I have experience with languages like Python, Java, JavaScript, and I work with frameworks such as React and
            Next.js.
            Alongside my studies, I have gained practical experience in customer service and developed personal
            projects, including portfolio websites.
            I am particularly interested in frontend development and DevOps, using tools like Docker and Kubernetes.
          </p>
          <p style={styles.paragraph}>
            I enjoy collaborating in teams and tackling new challenges.
            Feel free to check out my projects to learn more about my work!
          </p>

          <Button
              variant="outlined"
              onClick={onButtonClickCV}
          >
            Outlined
            <BrowserUpdatedIcon/>
          </Button>
        </div>
      </div>
    </>
  );
}