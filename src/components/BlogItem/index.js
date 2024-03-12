// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogDetails

  return (
    <Link to={`/blogs/${id}`}>
      <div className="BlogItemContainer">
        <div className="flex-row">
          <img src={imageUrl} className="blogImage" alt={`item${id}`} />
          <div className="informationContainer">
            <p>{topic}</p>
            <h1>{title}</h1>
            <div className="author-row">
              <img src={avatarUrl} className="avatarImg" alt={`avatar${id}`} />
              <p className="authorName">{author}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
