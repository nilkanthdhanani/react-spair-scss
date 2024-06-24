import React from 'react'
import './error.scss';

export default function Error() {
  return (
    <div className="error-page">
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds"></div>
      <div className="error-content">
        <h1 className="error-code">404</h1>
        <h2 className="error-message">Oops! Page Not Found</h2>
        <p className="error-description">
          Sorry, You took a wrong turn, the page you're looking for doesn't exist or maybe under construction.
          <br />
          <a href="/" className="home-link">Go Back Home</a>
        </p>
      </div>
    </div>
  )
}
