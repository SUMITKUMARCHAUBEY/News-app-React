import React, { Component } from 'react'

export class NewsIetm extends Component {
 
  render() {
    let{title,discription,imgurl,newsurl,author,date,source}=this.props;
    return (
      <div className='container my-3'>
      
       <div className="card" style={{width: "18rem"}}>
        <img src={imgurl===null?'logo512.png':imgurl} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{title} <span className="badge bg-danger">{source}</span></h5>
        <p className="card-text">{discription}</p>
        <p className='card-text'><small className='text-success'>By {author===null?'Unknown':author} on {new Date(date).toGMTString()}</small></p>
        <a href={newsurl} rel="noreferrer" target="_blank" className="btn btn-primary bg-dark">Read more</a>
        </div>
     </div>
      </div>
    )
  }
}

export default NewsIetm
