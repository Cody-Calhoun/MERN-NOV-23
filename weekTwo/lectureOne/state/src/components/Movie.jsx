import React, {useState} from 'react'
import Review from './Review'

const Movie = (props) => {
    const {title, year, timesViewed} = props
    const [allTimesViewed, setAllTimesViewed] = useState(timesViewed)

    const viewMovie = () => {
        setAllTimesViewed(allTimesViewed+1)
    }
  
    return (
    <div>
        <Review title={title} year={year} timesViewed={allTimesViewed} movieReview="This movie rocked" />
        <button onClick={viewMovie}>View Movie!</button>
    </div>
  )
}

export default Movie