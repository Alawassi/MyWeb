import React from 'react';
import { Button } from "@mui/material";
import onlineCuPdf from "../PDF/online_CU.pdf";
import certificate from "../PDF/Certificate_Winter School_Al Awassi_Hussein.pdf";

export default function Education() {
  const educationData = [
    {
      title: "Bachelor's Degree in Business Informatics",
      description: "",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/01/Otto_von_Guericke_Universit%C3%A4t_Magdeburg_Logo.svg",
      link: "https://www.ovgu.de",
    },
    {
      title: "Internship as Full Stack Developer",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmfxGOVyGk_6DlPQmlVhsCkwKqzaIcGROD0A&s",
      link: "https://www.mrcc.ovgu.de/vlba/home/",
      description: "",
    },
    {
      title: "Online Courses",
      description: "",
      logo: "https://training.nti.org.bb/wp-content/uploads/2023/02/Coursera-Logo-e1676662094759-1024x225.png.webp",
    },
    {
      title: "Google Cloud Skills Boost",
      description: "",
      logo: "https://cdn.icon-icons.com/icons2/2642/PNG/512/google_cloud_logo_icon_159333.png",
    },
  ];

  const onButtonClickPdf = () => {
    const link = document.createElement("a");
    link.href = onlineCuPdf;
    link.download = "online_CU.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const onButtonClickcertificate = () => {
    const link = document.createElement("a");
    link.href = certificate;
    link.download = "certificate.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
      <section className="education" id="education" style={styles.section}>
        <div className="text-center" style={styles.title}>
          Education
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
                            onClick={onButtonClickPdf}
                            style={{textDecoration: 'none'}}
                        >
                          More Info
                        </Button>
                    ) : item.title === "Google Cloud Skills Boost" ? (
                        <Button
                            variant="outlined"
                            onClick={onButtonClickcertificate}
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
    textAlign: 'left',
    boxShadow: "0 14px 8px rgba(255, 0, 0, 0.4)",
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
  },
  cardLogo: {
    width: "80px",
    height: "auto",
    marginRight: "15px",
  },
  cardMain: {
    flex: 1,
  },
  cardTitle: {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "10px",
  },
  cardText: {
    fontSize: "14px",
  },
};

// Responsive CSS
const css = `
  .education-card:hover {
    transform: scale(1.05);
  }
  
  /* Mobile Styling */
  @media (max-width: 768px) {
    .education-card {
      flex-direction: column;
      text-align: center;
      padding: 15px;
    }
    .education-card img {
      margin: 0 auto 10px;
      width: 60px; /* Smaller image for mobile */
    }
    .education .text-center {
      font-size: 28px; /* Slightly smaller title */
    }
    .education-card div {
      margin-bottom: 10px;
    }
  }
`;

document.head.insertAdjacentHTML("beforeend", `<style>${css}</style>`);
