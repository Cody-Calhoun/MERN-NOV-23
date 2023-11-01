import React from 'react'

const Review = (props) => {
    const {title, year, timesViewed, movieReview} = props
  return (
    <div>
        <h4>Movie Title: {title}</h4>
        <h4>Movie Year: {year}</h4>
        <h4>Total Views: {timesViewed}</h4>
        <h4>Review: {movieReview}</h4>
    </div>
  )
}

export default Review