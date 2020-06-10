import React from "react"
import Hashtag from './Hashtag'

const HashtagsContainer = ({ hashtags }) => {
    let hashtagsArr = []
    if (hashtags.length > 0) {
        for (let hashtag of hashtags){
            hashtagsArr.push(<Hashtag hashtag={hashtag} key={hashtag.id} />)
        }
        return <ul className="hashtags-container" >{ hashtagsArr }</ul>
    }
    return <p>No Hashtags</p>
}

export default HashtagsContainer