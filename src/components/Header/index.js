import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'
import Popup from 'reactjs-popup'
import './index.css'

const Header = () => {
  console.log('Header triggered')
  return (
    <nav className="nav-ele">
      <div>
        <Link to="/">
          <img
            className="img-ele"
            src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
            alt="website logo"
          />
        </Link>
      </div>

      <div className="popup-container">
        <Popup
          modal
          trigger={
            <button
              type="button"
              data-testid="hamburgerIconButton"
              className="trigger-button"
            >
              <GiHamburgerMenu className="trigger-icon" />
            </button>
          }
        >
          {close => (
            <div className="close-popup">
              <button
                type="button"
                className="trigger-button"
                data-testid="closeButton"
                onClick={() => close()}
              >
                <IoMdClose className="trigger-icon" />
              </button>
              <ul className="options">
                <Link to="/">
                  <li>
                    <AiFillHome />
                    Home
                  </li>
                </Link>
                <Link to="/about">
                  <li>
                    <BsInfoCircleFill />
                    About
                  </li>
                </Link>
              </ul>
            </div>
          )}
        </Popup>
      </div>
    </nav>
  )
}
export default Header
