// Write your JS code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'
import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {
    blogsData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getBlogItems()
  }

  getBlogItems = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()

    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))
    this.setState({blogsData: updatedData, isLoading: false})
  }

  render() {
    const {blogsData, isLoading} = this.state

    return (
      <div className="blogListContainer">
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={60} width={60} />
        ) : (
          blogsData.map(eachBlogItem => (
            <BlogItem key={eachBlogItem.id} blogDetails={eachBlogItem} />
          ))
        )}
      </div>
    )
  }
}

export default BlogList
