import { useState } from 'react';
import './CompactComponents.css';
import githubLogo from '../assets/github.svg';
import linkedinLogo from '../assets/linkedin.png';

export default function ContactSection() {
  const [copiedField, setCopiedField] = useState('');
  const [hoveredContact, setHoveredContact] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleCopyToClipboard = async (text, field) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(''), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:tarun.devrath@gmail.com?subject=Portfolio Contact: ${formData.name}&body=Hi Tarun,%0A%0A${formData.message}%0A%0ABest regards,%0A${formData.name}%0A${formData.email}`;
    window.location.href = mailtoLink;
  };

  const contactItems = [
    {
      id: 'phone',
      icon: '📞',
      label: 'Phone',
      value: '(+91) 9087744578',
      href: 'tel:+919087744578',
      copyText: '+919087744578'
    },
    {
      id: 'email',
      icon: '✉️',
      label: 'Email',
      value: 'tarun.devrath@gmail.com',
      href: 'mailto:tarun.devrath@gmail.com?subject=Hello%20Tarun&body=Hi%20Tarun,%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20connect.',
      copyText: 'tarun.devrath@gmail.com'
    },
    {
      id: 'location',
      icon: '📍',
      label: 'Location',
      value: 'Chennai, Tamil Nadu, India',
      href: 'https://maps.google.com?q=Chennai,Tamil+Nadu,India',
      copyText: 'Chennai, Tamil Nadu, India'
    }
  ];

  const socialLinks = [
    {
      id: 'github',
      name: 'GitHub',
      icon: githubLogo,
      href: 'https://github.com/5tarun3',
      color: '#333'
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      icon: linkedinLogo,
      href: 'https://www.linkedin.com/in/tarun-srikumar-273585282/',
      color: '#0077b5'
    }
  ];

  return (
    <section className="section contact-section-compact">
      <div className="section-header">
        <h2 className="gradient-text">Get In Touch</h2>
        <p className="section-subtitle">Let's create something amazing together</p>
        <div className="header-decoration"></div>
      </div>

      <div className="contact-compact-layout">
        {/* Left Column - Contact Info & Social */}
        <div className="contact-info-column">
          <div className="contact-info-compact">
            <h3 className="subsection-title">Contact Information</h3>
            <div className="contact-list-compact">
              {contactItems.map((item) => (
                <div 
                  key={item.id}
                  className={`contact-item-compact ${hoveredContact === item.id ? 'hovered' : ''}`}
                  onMouseEnter={() => setHoveredContact(item.id)}
                  onMouseLeave={() => setHoveredContact('')}
                >
                  <div className="contact-main-info">
                    <a 
                      href={item.href}
                      className="contact-link-compact"
                      target={item.id === 'location' ? '_blank' : undefined}
                      rel={item.id === 'location' ? 'noopener noreferrer' : undefined}
                    >
                      <span className="contact-emoji-compact">{item.icon}</span>
                      <div className="contact-text">
                        <span className="contact-label-compact">{item.label}</span>
                        <span className="contact-value-compact">{item.value}</span>
                      </div>
                    </a>
                    <button
                      className="copy-button-compact"
                      onClick={() => handleCopyToClipboard(item.copyText, item.id)}
                      title="Copy to clipboard"
                    >
                      {copiedField === item.id ? '✓' : '📋'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="social-section-compact">
            <h3 className="subsection-title">Connect With Me</h3>
            <div className="social-links-compact">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-compact"
                  style={{'--social-color': social.color}}
                >
                  <img 
                    src={social.icon} 
                    alt={social.name}
                    className="social-icon-compact"
                  />
                  <span className="social-label-compact">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="contact-form-column">
          <h3 className="subsection-title">Quick Message</h3>
          <form className="contact-form-compact" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group-compact">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input-compact"
                  required
                />
              </div>
              <div className="form-group-compact">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input-compact"
                  required
                />
              </div>
            </div>
            <div className="form-group-compact">
              <textarea 
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                className="form-textarea-compact"
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit" className="cta-button form-submit-compact">
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>

      {/* Copy Notification */}
      {copiedField && (
        <div className="copy-notification-compact">
          <span>✓ Copied to clipboard!</span>
        </div>
      )}
    </section>
  );
}
