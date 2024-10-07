import React from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation

function MyComponent() {
    const navigate = useNavigate();
  
    const handleClick = () => {
      navigate('/about'); // Use navigate to navigate to the login page
    };

    return (
      <div style={styles.container}>
        <header style={styles.navBar}>
          <nav>
            <ul style={styles.navList}>
              <li style={styles.navItem}><a href="/" style={styles.navLink}>Home</a></li>
              <li style={styles.navItem}><a href="/about" style={styles.navLink}>About</a></li>
              <li style={styles.navItem}><a href="/login" style={styles.navLink}>Login</a></li>
              <li style={styles.navItem}><a href="/contactus" style={styles.navLink}>Contact</a></li>
            </ul>
          </nav>
        </header>
        <div style={styles.mainSection}>
          <div style={styles.illustration}>
            {/* Image placeholder for the illustration */}
            <img src="https://png.pngtree.com/png-vector/20220803/ourmid/pngtree-friendly-team-work-colleagues-large-remote-office-png-image_5719657.png" alt="Illustration" style={styles.image}/>
          </div>
          <div style={styles.content}>
            <h1 style={styles.heading}>Recognize every achievement!</h1>
            <p style={styles.paragraph}>Welcome to the Student Achievement Management System.<br/>
               Easily track and manage student achievements in extracurricular activities.
            </p>
            <button style={styles.button} onClick={handleClick}>Get Started</button>
          </div>
        </div>
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
  buttonHover: {
    backgroundColor: '#8EACCD',
  },
};

export default MyComponent;
