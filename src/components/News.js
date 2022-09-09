import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className="container my-3 ">
        <h2>TIMES OF INDIA - TOP NEWS</h2>
        <div className="row">
          <div className="col-md-3">
            <Card>
              <NewsItem title="myTitle" decription="mydesc" imageUrl="https://c4.wallpaperflare.com/wallpaper/883/1002/491/sachin-tendulkar-god-of-cricket-wallpaper-preview.jpg" />
            </Card>
          </div>
          <div className="col-md-3">
            <Card>
              <NewsItem title="myTitle" decription="mydesc" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1S2kiMU8rgNOaGimK5ieGUxn0cauP2XRCB4se4d-2-IIXpmGORQScjWGsxdYvRLSRkeY&usqp=CAU" />
            </Card>
          </div>
          <div className="col-md-3">
            <Card>
              <NewsItem title="myTitle" decription="mydesc" imageUrl="https://images4.alphacoders.com/298/thumb-1920-298368.jpg" />
            </Card>
          </div>
        </div>
      </div>
    )
  }
}

export default News
