import Header from '../Header'
import './index.css'

const Home = () => {
  console.log('Home triggered')
  return (
    <div>
      <Header />
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
          alt="home"
        />
      </div>
    </div>
  )
}
export default Home
