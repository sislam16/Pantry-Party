import React from "react"

const Hashtag = ({ hashtag }) => {
    let name = hashtag.tag_body;

    return <li>{name}</li>
}

export default Hashtag;