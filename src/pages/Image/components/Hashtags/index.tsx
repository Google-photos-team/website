import React from "react";
import Tag from "../../../../components/Tag";
import { Span } from "../../../../components/Typography";
import HashtagsStyle from "./style";

const Hashtags = () => {
    const myHashtags = ["Lorem", "Lorem", "Lorem", "Lorem", "Lorem"]
    return (
        <div className="hashtags">
                <HashtagsStyle>
                {myHashtags.map((item, index) =>
                    <Span
                        key={index}
                        className="hashtagsTitle"
                        weight={500}
                        color="darkBlue"
                    >
                        #{item}
                    </Span>)
                }
        </HashtagsStyle>
            </div>
    );
}

export default Hashtags