import React, { Component } from 'react'

export default class Newsitem extends Component {
   
  render() {
    let {title, desp, imgUrl,newsUrl}= this.props;
    return (
      <div>
        <div className="card my-2 m-4" style={{ height:"500px"}} >
            <img src={imgUrl} className="card-img-top" alt="Preview not Available" style={{height:"200px"}}/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{desp}...</p>
                <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-outline-secondary btn-sm">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}
