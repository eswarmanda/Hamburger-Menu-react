import Header from '../Header'
import './index.css'

const NotFound = () => {
  console.log('Not Found triggered')
  return (
    <div>
      <Header />
      <div className="not-found-card">
        <img
          className="not-found"
          src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
          alt="not found"
        />
        <h3>Lost Your Way?</h3>
        <p>
          Sorry, we cannot find that page. You will find lots to explore on the
          home page
        </p>
      </div>
    </div>
  )
}
export default NotFound
