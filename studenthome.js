import React from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation

function StudentHome() {
  const navigate = useNavigate();

  const handleLogAchievement = () => {
    navigate('/Logachievements'); // Navigate to log achievement page
  };

  const handleViewAchievements = () => {
    navigate('/viewachievements'); // Navigate to view achievements page
  };

  const handleGenerateReport = () => {
    navigate('/generatereport'); // Navigate to generate report page
  };

  return (
    <div style={styles.container}>
      <header style={styles.navBar}>
        <nav>
          <ul style={styles.navList}>
            <li style={styles.navItem}><a href="/" style={styles.navLink}>Home</a></li>
            <li style={styles.navItem}><a href="/about" style={styles.navLink}>About</a></li>
            <li style={styles.navItem}><a href="/contactus" style={styles.navLink}>Contact</a></li>
            <li style={styles.navItem}><a href="/" style={styles.navLink}>Logout</a></li>
          </ul>
        </nav>
      </header>
      
      <main style={styles.mainSection}>
        <div style={styles.illustration}>
          <img src="https://png.pngtree.com/png-vector/20220803/ourmid/pngtree-friendly-team-work-colleagues-large-remote-office-png-image_5719657.png" alt="Illustration" style={styles.image} />
        </div>
        <div style={styles.content}>
          <h2 style={styles.heading}>Welcome, Student!</h2>
          <p style={styles.paragraph}>
            Here, you can track and manage your extracurricular achievements.
          </p>
          <div style={styles.buttonContainer}>
            <button style={styles.button} onClick={handleLogAchievement}>
              Log Achievement
            </button>
            <button style={styles.button} onClick={handleViewAchievements}>
              View Achievements
            </button>
            <button style={styles.button} onClick={handleGenerateReport}>
              Generate Report
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#f0f0f0',
    fontFamily: 'Arial, sans-serif',
    height: '100vh',
    margin: 0,
    padding: 0,
  },
  navBar: {
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '10px 0',
  },
  navList: {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    margin: 0,
    padding: 0,
  },
  navItem: {
    display: 'inline',
  },
  navLink: {
    textDecoration: 'none',
    fontSize: '18px',
    color: '#333',
    fontWeight: 'bold',
  },
  mainSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '50px',
    backgroundColor: '#fff',
    height: 'calc(100vh - 60px)', // Adjust height considering the nav bar
  },
  illustration: {
    flex: 1,
    textAlign: 'center',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
  },
  content: {
    flex: 1,
    paddingLeft: '50px',
  },
  heading: {
    fontSize: '42px',
    color: '#333',
    marginBottom: '20px',
  },
  paragraph: {
    fontSize: '18px',
    color: '#666',
    lineHeight: '1.6',
    marginBottom: '30px',
  },
  buttonContainer: {
    display: 'flex',
    gap: '15px',
  },
  button: {
    padding: '12px 30px',
    fontSize: '18px',
    backgroundColor: '#8EACCD',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default StudentHome;
