import React from "react";
import {Button} from "@mui/material";

export default function Projects() {
  const educationData = [
    {
      title: "Automated topic extraction from PDF files using LDA models in Python",
      description: "",
      logo: "",
      link: "https://github.com/Alawassi/Automated-topic-extraction",
    },
    {
      title: "My Web",
      description: "Personal web development project.",
      logo: "",
      link: " https://github.com/Alawassi/MyWeb ",
    },
    {
      title: "E-Commerce",
      description: "",
      logo: "",
      link: "https://github.com/Alawassi/DEV/tree/master/ecom/frontend",
    },
    {
      title: "TODO LIST",
      description: "",
      logo: "",
      link: "https://github.com/Alawassi/TODO-LIST",
    },
    {
      title: "Portfolio",
      description: "",
      logo: "",
      link: "https://github.com/Alawassi/Portfolio ",
    },
    {
      title: "Menu",
      description: " ",
      logo: "",
      link: "https://github.com/Alawassi/Resturant-Menu",
    },
  ];

  return (
      <section className="project" id="projects" style={styles.section}>
        <div className="text-center" style={styles.title}>
          Mini Projects
        </div>
        <div style={styles.container}>
          <div style={styles.cardWrapper}>
            {educationData.map((item, index) => (
                <div
                    key={index}
                    style={styles.card}
                    className="education-card"
                >
                  {item.logo && (
                      <img src={item.logo} alt={`${item.title} logo`} style={styles.cardLogo}/>
                  )}
                  <div style={styles.cardMain}>
                    <div style={styles.cardTitle}>{item.title}</div>
                    <ul style={styles.cardText}>{item.description}</ul>
                    {item.title === "Online Courses" ? (
                        <Button
                            variant="outlined"
                            style={{textDecoration: 'none'}}
                        >
                          More Info
                        </Button>
                    ) : (
                        item.link && (
                            <Button
                                variant="outlined"
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{textDecoration: 'none'}}
                            >
                              More Info
                            </Button>
                        )
                    )}
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
}

const styles = {
  section: {
    padding: "70px 0",
  },
  title: {
    fontSize: "32px",
    fontWeight: "bold",

  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 15px",
  },
  cardWrapper: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
    alignItems: "center",
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    width: '100%',
    textAlign: 'left',
    boxShadow: "0 14px 8px rgba(255, 0, 0, 0.4)",
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  cardLogo: {
    width: "60px",
    height: "auto",
    marginRight: "15px",
    flexShrink: 0,
  },
  cardMain: {
    flex: 1,
  },
  cardTitle: {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "8px",
  },
  cardText: {
    fontSize: "14px",
  },
};

// CSS for hover effect
const css = `
  .project-card:hover {
    transform: scale(1.05);
    box-shadow: 0 14px 16px rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 768px) {
    .project-card {
      flex-direction: column;
      text-align: center;
    }
    .project-card img {
      margin: 0 auto 15px;
      width: 100px;
    }
  }
  @media (max-width: 480px) {
    .project-card {
      padding: 15px;
    }
    .project-card h3 {
      font-size: 18px;
    }
    .project-card p {
      font-size: 12px;
    }
  }
`;
document.head.insertAdjacentHTML("beforeend", `<style>${css}</style>`);
