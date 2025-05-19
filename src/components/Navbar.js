import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const handleMouseEnter = (e) => {
    e.target.style.color = '#f1c40f';
    e.target.style.transform = 'scale(1.1)';
  };

  const handleMouseLeave = (e) => {
    e.target.style.color = '#fff';
    e.target.style.transform = 'scale(1)';
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.navContainer}>
        <ul style={styles.navList}>
          {[
            { label: "Home", path: "/" },
            { label: "About Us", path: "/aboutUs" },
            { label: "Events", path: "/event" },
            { label: "History of Diamonds", path: "/historyDiamond" },
            { label: "Leadership Team", path: "/leadership" },
            { label: "Contact Us", path: "/ContactUs" },
          ].map((item, index) => (
            <li key={index} style={styles.navItem}>
              <Link
                to={item.path}
                style={styles.navLink}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#333',
    padding: '15px 0',
    position: 'sticky',
    top: '0',
    zIndex: '999',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
  navContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    margin: '0',
  },
  navItem: {
    fontSize: '16px',
    fontWeight: '600',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    transition: 'color 0.3s ease, transform 0.3s ease',
    padding: '8px 12px',
    borderRadius: '4px',
  },
};

export default Navbar;
