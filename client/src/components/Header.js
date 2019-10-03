import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <div className="nav-wrapper blue darken-3">
            <a href="/" className="brand-logo">
              Gorbyoyo Translator
            </a>
          </div>
        </nav>
      </header>
    )
  }
}
