import { useState } from 'react'
import './HoldingPage.css'



function HoldingPage() {
  const [email, setEmail] = useState('')

  const handleEnter = (e) => {
    e.preventDefault()
    
    if (!email.trim()) {
      alert('Please enter your e-mail address first.')
      return
    }

    const customBody = `I'd like to learn more about blú swimwear as soon as you can share.\r\n\r\nMy email is: ${email.trim()}\r\n\r\nTeam blú`
    const mailtoLink = `mailto:scott@verynewyork.com?subject=${encodeURIComponent('blú swimwear early experiencer request')}&body=${encodeURIComponent(customBody)}`
    
    window.location.href = mailtoLink
  }

  return (
    <div className="holding-container">
      <header className="holding-header">
        <img
          src="/blu-swimwear-logo-2026-white.png"
          alt="blú swimwear logo"
          className="logo"
        />
      </header>

      <main className="holding-main">
        <h1 className="tagline">Effortless. Elevated. Essential.</h1>

        <div className="message">
          <p>
            A new standard in swim —<br />
            more than swim, an experience.
          </p>
          <p>
            Every detail tells a story, a collection<br />
            designed to be lived in and remembered.
          </p>
          <p>
            Luxury you feel instantly —<br />
            comfort you never think about.
          </p>
        </div>

        <div className="call-to-action">
          <h2>Be the first to experience blú.</h2>
          <form className="form-wrapper" onSubmit={handleEnter}>
            <input
              type="email"
              id="email-input"
              className="email-input"
              placeholder="your e-mail"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" id="enter-button" className="enter-button">
              Enter
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}

export default HoldingPage
