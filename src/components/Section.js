import React from 'react';

const Section = ({ title, content }) => {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.sectionTitle}>{title}</h2>
        <p style={styles.sectionContent}>{content}</p>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '60px 0',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  sectionTitle: {
    fontSize: '28px',
    fontWeight: '700',
    marginBottom: '20px',
    color: '#222',
    textAlign: 'center',
  },
  sectionContent: {
    fontSize: '16px',
    color: '#444',
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto',
  },
};

export default Section;
