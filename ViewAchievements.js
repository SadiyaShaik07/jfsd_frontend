import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function ViewAchievements() {
  const location = useLocation();
  const [achievementsList, setAchievementsList] = useState([]);

  // Function to load achievements from local storage on component mount
  useEffect(() => {
    const savedAchievements = JSON.parse(localStorage.getItem('achievementsList')) || [];
    setAchievementsList(savedAchievements);

    if (location.state?.achievementsList) {
      const newAchievements = location.state.achievementsList.filter((newAchievement) => {
        return !savedAchievements.some((savedAchievement) => 
          savedAchievement.event === newAchievement.event && 
          savedAchievement.description === newAchievement.description
        );
      });

      if (newAchievements.length > 0) {
        const updatedList = [...savedAchievements, ...newAchievements];
        setAchievementsList(updatedList);
        localStorage.setItem('achievementsList', JSON.stringify(updatedList));
      }
    }
  }, [location.state]);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Your Achievements</h2>
      {achievementsList.length === 0 ? (
        <p>No achievements logged yet.</p>
      ) : (
        <table style={styles.table}>
          <thead>
            <tr>
              <th>#</th>
              <th>Event</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {achievementsList.map((achievement, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{achievement.event}</td> {/* Displaying event field */}
                <td>{achievement.description}</td> {/* Displaying description field */}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: '50px',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  table: {
    width: '50%',
    margin: '0 auto',
    borderCollapse: 'collapse',
  },
  th: {
    padding: '10px',
    border: '1px solid #ddd',
    backgroundColor: '#f0f0f0',
  },
  td: {
    padding: '10px',
    border: '1px solid #ddd',
  },
};

export default ViewAchievements;
