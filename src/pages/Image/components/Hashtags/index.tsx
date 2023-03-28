import React from "react";
import Tag from "../../../../components/Tag";
import HashtagsStyle from "./style";

const Hashtags = () => {
    const myHashtags = ["Lorem", "Lorem", "Lorem", "Lorem", "Lorem"]
    return (
        <HashtagsStyle>
            {myHashtags.map((item, index) => <Tag key={index}># {item}</Tag>)}
        </HashtagsStyle>
    );
}

export default Hashtags