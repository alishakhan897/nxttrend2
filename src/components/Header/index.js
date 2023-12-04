// Write your JS code here
import {Component} from 'react'
import './index.css'

class Header extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <div className="nav-image">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              className="nxt-trends2"
              alt="Website logo"
            />
          </div>
          <div className="for-small-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
              className="log-out-image"
              alt="nav logout"
            />
          </div>

          <ul className="text">
            <li className="home">Home</li>
            <li className="home">Products</li>
            <li className="home">Cart</li>
            <button type="button" className="buttonlog">
              Log Out
            </button>
          </ul>
        </div>
        <div className="home-about-small-section">
          <div className="home-div-small">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
              className="home-image-icon"
              alt="nav home"
            />
          </div>
          <div className="home-div-small">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
              className="home-image-icon"
              alt="nav products"
            />
          </div>
          <div className="home-div-small">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
              className="home-image-icon"
              alt="nav cart"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Header
