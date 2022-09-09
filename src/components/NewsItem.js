import React, { Component } from 'react'

export class NewsItem extends Component {
  constructor()
  {
    super();
    console.log("Hello i am the genius personality")
  }
  render() {
    let {title,description, imageUrl}=this.props
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
          <img src={imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Hii</h5>
              <a href="" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
