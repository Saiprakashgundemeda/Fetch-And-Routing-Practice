import './index.css' // Add this line to import the CSS file
import UserInfo from '../UserInfo'
import BlogList from '../BlogList'

const Home = () => (
  <div className="home-container" data-testId="loader">
    <UserInfo />
    <BlogList />
  </div>
)

export default Home
