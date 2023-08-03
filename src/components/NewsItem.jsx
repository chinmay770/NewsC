import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsC from './NewsC.png'

export default class NewsItem extends Component {
    render() {
        let {title, description, imageUrl, newsUrl, author, date} = this.props;
        return (
            <div className='my-3'>
                <div className="card">
                    <img src={!imageUrl ? NewsC : imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <p class="card-text"><small class="text-muted">Published by {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                            <a href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}
