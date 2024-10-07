import React from 'react';
import { Link } from 'react-router-dom'; // For navigation

function About() {
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
      <div style={styles.content}>
        <div style={styles.textContainer}>
          <h1 style={styles.heading}>About Us</h1>
          <p style={styles.paragraph}>
            Welcome to the Student Achievement Management System. We are dedicated to helping students track and manage their extracurricular achievements, providing them with the tools they need to succeed.
          </p>
          <p style={styles.paragraph}>
          Our mission is to provide students with the tools they need to easily record, manage, and showcase their achievements. The Student Achievement Management System offers a user-friendly interface where students can:
          </p>
          <ul style={styles.list}>
    <li style={styles.listItem}><strong>Record Achievements:</strong> Easily log various accomplishments in real-time, ensuring that no achievement goes unnoticed.</li>
    <li style={styles.listItem}><strong>Monitor Progress:</strong> Track personal growth over time, helping students to reflect on their journey and set future goals.</li>
    <li style={styles.listItem}><strong>Generate Reports:</strong> Create comprehensive reports of achievements that can be shared with potential colleges, employers, or for personal use.</li>
    <li style={styles.listItem}><strong>Receive Recognition:</strong> Celebrate achievements with peers and mentors, fostering a culture of encouragement and support.</li>
  </ul>
          

        </div>
        <div style={styles.imageContainer}>
          <img src="https://thumbs.dreamstime.com/b/learning-management-system-concept-vector-illustration-educational-courses-software-computer-screen-technology-online-delivery-162895973.jpg" alt="Achievement Illustration" style={styles.image} />
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#FFFFFF', // Light gray background
    padding: '0px',
    height: '100vh',
    margin : 0,
  },
  navBar: {
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '10px 0',
    borderBottom: 'none',
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
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '20px',
  },
  textContainer: {
    flex: '1',
    paddingRight: '20px',
  },
  heading: {
    fontSize: '36px',
    color: '#333',
    marginBottom: '20px',
  },
  paragraph: {
    fontSize: '18px',
    color: '#666',
    lineHeight: '1.6',
    maxWidth: '600px',
  },
  imageContainer: {
    flex: '1',
    display: 'flex',
    justifyContent: 'center', // Center the image horizontally
    alignItems: 'center', // Align image to the right
  },
  image: {
    width: '600px', // Adjust based on your needs
    height: 'auto',
  },
};

export default About;
