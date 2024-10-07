import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LogAchievements() {
  const [event, setEvent] = useState('');
  const [description, setDescription] = useState('');
  const [achievementsList, setAchievementsList] = useState([]);
  const navigate = useNavigate();

  // Handle form input change for event selection and description
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'event') {
      setEvent(value);
      setDescription(`${value} achievement logged.`);
    } else if (name === 'description') {
      setDescription(value);
    }
  };

  // Handle form submission to log achievement
  const handleSubmit = (e) => {
    e.preventDefault();
    if (event && description) {
      const newAchievement = { event, description };
      const updatedAchievementsList = [...achievementsList, newAchievement];
      setAchievementsList(updatedAchievementsList);
      setEvent(''); // Reset event field
      setDescription(''); // Reset description field

      // Navigate to View Achievements page with the updated list
      navigate('/viewachievements', { state: { achievementsList: updatedAchievementsList } });
    } else {
      alert('Please select an event and provide a description.');
    }
  };

  // Predefined buttons for event logging
  const handleEventSelection = (eventName) => {
    setEvent(eventName);
    setDescription(`${eventName} achievement logged.`);
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
        <div style={styles.content}>
          <h2 style={styles.heading}>Log Your Achievement</h2>
          <form onSubmit={handleSubmit} style={styles.form}>
            <label style={styles.label}>
              Achievement Event:
              <select name="event" value={event} onChange={handleInputChange} style={styles.input}>
                <option value="">Select an event</option>
                <option value="Hackathon Participation">Hackathon Participation</option>
                <option value="Coding Competition Winner">Coding Competition Winner</option>
                <option value="Sports Event Champion">Sports Event Champion</option>
              </select>
            </label>
            <label style={styles.label}>
              Description:
              <textarea
                name="description"
                value={description}
                onChange={handleInputChange}
                style={styles.textarea}
                placeholder="Provide more details"
              />
            </label>
            <button type="submit" style={styles.button}>Log Achievement and View</button>
          </form>

          <div style={styles.eventButtons}>
            <button style={styles.eventButton} onClick={() => handleEventSelection('Hackathon Participation')}>
              Log Hackathon Participation
            </button>
            <button style={styles.eventButton} onClick={() => handleEventSelection('Coding Competition Winner')}>
              Log Coding Competition Winner
            </button>
            <button style={styles.eventButton} onClick={() => handleEventSelection('Sports Event Champion')}>
              Log Sports Event Champion
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
    justifyContent: 'center',
    alignItems: 'center',
    padding: '50px',
    backgroundColor: '#fff',
    height: 'calc(100vh - 60px)',
  },
  content: {
    maxWidth: '500px',
    width: '100%',
  },
  heading: {
    fontSize: '32px',
    color: '#333',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '10px',
    fontSize: '18px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    marginBottom: '15px',
  },
  textarea: {
    padding: '10px',
    fontSize: '16px',
    marginBottom: '15px',
    height: '100px',
  },
  button: {
    padding: '12px 30px',
    fontSize: '18px',
    backgroundColor: '#8EACCD',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  eventButtons: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
  eventButton: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#8EACCD',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default LogAchievements;
