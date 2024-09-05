function About() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1 style={{ color: '#333', fontSize: '2.5em', marginBottom: '20px' }}>About Us</h1>
      <p style={{ fontSize: '1.2em', color: '#555', lineHeight: '1.6' }}>
        Our company has been providing top-notch services since 1990. We specialize in various fields including technology, marketing, and consultancy.
      </p>
      <img src="/assets/about-us.jpg" alt="About Us" style={{ width: '100%', maxWidth: '600px', borderRadius: '10px', marginTop: '20px' }} />
    </div>
  );
}

export default About;
