import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    const mailtoLink = `mailto:sakshiiipawar10@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nContact: ${formData.contact}\n\nMessage:\n${formData.message}`
    )}`

    window.location.href = mailtoLink

    setTimeout(() => {
      setStatus('sent')
      setFormData({ name: '', email: '', contact: '', message: '' })
      setTimeout(() => setStatus(''), 3000)
    }, 1000)
  }

  return (
    <div className="contact">
      <h2 className="section-title">Contact Me</h2>
      <div className="contact-container">
        <form className="contact-form cursor-target" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className="cursor-target"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
              className="cursor-target"
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact">Contact Number</label>
            <input
              type="tel"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
              placeholder="+1 234 567 8900"
              className="cursor-target"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Your message here..."
              className="cursor-target"
            />
          </div>
          <button type="submit" className="submit-btn cursor-target" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Sent!' : 'Send Message'}
          </button>
          {status === 'sent' && (
            <p className="success-message">Message sent successfully!</p>
          )}
        </form>
      </div>
    </div>
  )
}

export default Contact
