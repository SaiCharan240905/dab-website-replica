import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-section fade-in">
      <h2>Contact Us</h2>
      <p className="contact-greeting"><strong>Hello!</strong></p>
      <div className="contact-content">
        <p>
          Thank you for reaching out to us here. We appreciate your interest and support in our united community of diamond jewellery manufacturers.
          We mark seven+ years of growth and collaboration, guided by our motto <em>"Grow together, shine together."</em>
          Your involvement contributes to our shared success. We showcase member profiles, extraordinary jewellery creations, and offer opportunities for retailers and related industries.
          By fostering partnerships and embracing positive changes, we strive to benefit our members and the jewellery industry as a whole.
        </p>
        <p>
          You can reach us via email, phone, or visit our office at the address below.
        </p>
      </div>

      <div className="contact-info">
        <p><strong>Email :</strong> kiranmehta_9@reditff.com</p>
        <p><strong>gmail :</strong> kiranmehta300980@gmail.com</p>
        <p><strong>Phone :</strong> 080 41517651 (Landline)</p>
        <p><strong>Address : </strong>
          Diamond Association Bangalore,
          302, KT-25 Nidhi Apartments, 17- National High School Road,
          V V Puram, Bengaluru - 560004,
          Karnataka, India.
        </p>
        <p><strong>Office Timings : </strong>
          Monday - Friday : 09:00 AM – 6:00 PM
        </p>
      </div>
    </div>
  );
};

export default Contact;
