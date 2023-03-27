import React from "react";

import { Span } from "../../../../components/Typography";
import HashtagsStyle from "./style";

const Hashtags = () => {
    const myHashtags = ["#Lorem", "#Lorem", "#Lorem", "#Lorem", "#Lorem"]
    return (
        <HashtagsStyle>
            <div className="hashtags">
                {myHashtags.map((item, index) =>
                    <Span
                        key={index}
                        className="hashtagsTitle"
                        weight={500}
                        color="darkBlue"
                    >
                        {item}
                    </Span>)
                }
            </div>
        </HashtagsStyle>
    );
}

export default Hashtags