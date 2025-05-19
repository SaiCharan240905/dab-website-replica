import React from 'react';
import FooterLogo from '../assets/logo.png';

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <div style={styles.left}>
          <img src={FooterLogo} alt="Logo" style={styles.logo} />
        </div>
        <div style={styles.center}>
          <h1 style={styles.title}>Diamond Association Bangalore</h1>
        </div>
        <div style={styles.right}></div>
      </div>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: 'white',
    padding: '20px 0',
    color: '#fff',
    width: '100%',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 20px',
    flexWrap: 'wrap',
  },
  left: {
    flex: '1',
  },
  center: {
    flex: '2',
    textAlign: 'center',
  },
  right: {
    flex: '1',
    textAlign: 'right',
  },
  logo: {
    height: '100px',
    width: 'auto',
  },
  title: {
    fontSize: '32px',
    fontWeight: '700',
    margin: 0,
    color: 'black',
  },
};

export default Header;

