import React from 'react'

//export class NewsItem extends Component 
const NewsItem = (props) =>{
  // render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
      <div className='my-2'>
        <div className="card">
            <div style={{display: 'flex',justifyContent: 'flex-end', position: 'absolute', right:'0'}}>
              <span className="badge rounded-pill bg-success"  >
                {source}
              </span>
            </div>
            <img src={imageUrl ? imageUrl : "https://th.bing.com/th/id/OIP.ODF68Yqk4FnO3-Kcbie-3AHaFl?w=284&h=215&c=7&r=0&o=5&dpr=1.5&pid=1.7" } className="card-img-top" alt="img" />
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} target="" className="btn btn-sm btn-info">Read More</a>
            </div>
        </div>
      </div>
    )
  // }
}

export default NewsItem
