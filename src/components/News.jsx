import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export default class News extends Component {

  static defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'general'

  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

articles = []

constructor(){
    super();
    this.state = {
       articles: [],
       loading: false,
       page: 1,
       pageSize: 20
    }
}

async componentDidMount(){
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f44894cb3cc5469fa9b225a79b8cd9cc&page=1&pageSize=${this.props.pageSize}`;
  let data = await fetch(url);
  let parsedData = await data.json()
  this.setState({articles: parsedData.articles})
  document.title = this.props.category
}

handleNextChange = async ()=>{
  console.log("Next");
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f44894cb3cc5469fa9b225a79b8cd9cc&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
let data = await fetch(url);
let parsedData = await data.json()
this.setState({
  page: this.state.page+1,
  articles: parsedData.articles
})
}

handlePrevChange = async ()=>{
console.log("Prev");
let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f44894cb3cc5469fa9b225a79b8cd9cc&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
let data = await fetch(url);
let parsedData = await data.json()
this.setState({
  page: this.state.page-1,
  articles: parsedData.articles
})
}

  render() {
    return (
      <>
      <div className='container'>
        <div className="text-center" style={{marginTop: "90px", marginBottom: "30px"}}><h1>CNews-TOP HEADLINES</h1></div>
        <div className="row">
        {this.state.articles.map((element)=>{

            return <div className="col-md-4" key={element.url}>
            <NewsItem title={element?element.title.slice(0, 45):""}  description = {element?element.description:""} imageUrl = {element.urlToImage} newsUrl = {element.url} date = {element.publishedAt} author = {element.author}/>
            </div>

        })}    
        </div>
       <div className="container d-flex justify-content-between">
       <button disabled={this.state.page<=1} onClick={this.handlePrevChange}type="button" className="btn btn-dark">&larr; Previous</button>
       <button onClick={this.handleNextChange} type="button" className="btn btn-dark">Next &rarr;</button>
       </div>
      </div>
      <div className="text-center" style={{marginTop: "70px", background: 'darkgrey'}}>made by: chinmaynilkanth © 2023</div> 
      </>
    )
  }
}
