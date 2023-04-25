import React, { Component } from 'react'
import NewsIetm from './NewsIetm'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
// import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
 static defaultProps={
  country:'in',
  pageSize:6,
  catagory:'general'
 }
 static propType={
  country:PropTypes.string,
  pageSize:PropTypes.number,
  catagory:PropTypes.string,
 }
  constructor(props){
    super(props);
    this.state={
      articles:[],
      loading:true,
      page:1,
      totalResults:0
    }
    document.title=`${this.props.catagory}-WhatsNew`;
  }
  Updatepage=async(page)=>{
    this.props.setpro(10)
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=${this.props.api}&page=${page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    this.props.setpro(30)
    let data=await fetch(url);
    this.props.setpro(60)
    let parsedata=await data.json();
    this.props.setpro(70)
    
    this.setState({
      articles:parsedata.articles,
      totalResults:parsedata.totalResults,
      loading:false,
    })

  this.props.setpro(100)
  }
async componentDidMount(){
  // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=${this.props.api}&page=1&pageSize=${this.props.pageSize}`;
  // let data=await fetch(url);
  // let parsedata=await data.json();
  // // console.log(parsedata);
  // this.setState({
  //   articles:parsedata.articles,
  //   loading:false,
  // })
  
  this.Updatepage();

}

// fetchMoreData = async() => {

//   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=${this.props.api}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
 //   this.setState({page:this.state.page+1})   
//     let data=await fetch(url);
//     let parsedata=await data.json();
    
//     this.setState({
//       articles:this.state.articles.concat(parsedata.articles),
//       totalResults:parsedata.totalResults,
    
//     })
//   }

handleNext= ()=>{
  // console.log('next');
  // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=${this.props.api}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
  // this.setState({loading:true})
  // let data=await fetch(url);
  // let parsedata=await data.json();
  // // console.log(parsedata.totalResults);
  // this.setState({
  //   articles:parsedata.articles,
  //   page:this.state.page+1,
  //   loading:false,
  // })
  

  this.setState({page:this.state.page+1})
  this.Updatepage(this.state.page+1);
  
}


handlePrev=()=>{
 
  this.setState({page:this.state.page-1,})
  
  this.Updatepage(this.state.page-1);
  
  // console.log('prev');
  
}

  render() {
    return (
      <>
        <h1 className='text-center'style={{marginTop:'90px'}}>Top {this.props.catagory} Headlines</h1>
        {this.state.loading && <div className='mt-5 pt-5'><Spinner/></div>}
        
        {/* <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
          
        > */}
          

          <div className="container">
        <div className="row">
        {this.state.articles.map((element)=>{
        return <div key={element.url} className="col-md-4">
        <NewsIetm  title={element.title ? element.title.slice(0,45):" "} discription={element.description? element.description.slice(0,88):" "} imgurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
        </div>
        })}
        </div>
        <div className="container d-flex justify-content-between my-5 py-3">
        <button disabled={this.state.page===1} className='btn btn-dark' onClick={this.handlePrev}> &larr; Previous</button>
        <button disabled={this.state.page>=38/this.props.pageSize} className='btn btn-dark' onClick={this.handleNext}>Next &rarr;</button>
        </div>
        </div>
          {/* </InfiniteScroll> */}
      </>
    )
  }
}

export default News
