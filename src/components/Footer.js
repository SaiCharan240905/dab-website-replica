import React from 'react';
import FooterLogo from '../assets/FooterLogo.png'; // Ensure correct path to image

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <img src={FooterLogo} alt="Footer Logo" style={styles.logo} />
        <p style={styles.footerText}>© 2025 Diamond Association Bangalore. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#0F2130 ',
    color: '#fff',
    textAlign: 'center',
    padding: '30px 0',
    fontSize: '14px',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  logo: {
    width: '100%', // This will make the logo take up the full width of the screen
    height: 'auto', // Maintain aspect ratio
  },
  footerText: {
    marginTop: '10px',
  },
};

export default Footer;
