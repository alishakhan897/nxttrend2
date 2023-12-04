// Write your JS code here
import {Component} from 'react'
import Header from '../Header'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="main-container2">
        <Header />
        <div className="home-nav">
          <div className="heading-continer-div">
            <h1 className="clothes-heading">Clothes That Get You Noticed</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              className="img-cloth-small"
              alt="clothes that get you noticed"
            />
            <p className="clothes-para">
              Fashion is part of the daily air and it doest not quite help and
              that it changes all the time clothes have always been a marker of
              the era and we are in the revolution your fashion makes you been
              seen and heared that way you are so celebrate the season new and
              exciting fashion in your own way{' '}
            </p>
            <button type="button" className="button2">
              Shop Now
            </button>
          </div>

          <div className="image-div">
            <div className="home-div-small">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
                className="image-clothes"
                alt="clothes that get you noticed"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
