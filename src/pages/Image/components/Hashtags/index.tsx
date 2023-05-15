import React from "react";
import Tag from "../../../../components/Tag";
import { Span } from "../../../../components/Typography";
import HashtagsStyle from "./style";

interface IProps {
    tags: string[]
}
const Hashtags = ({ tags }: IProps) => {
    return (
        <div className="hashtags">
            <HashtagsStyle>
                {tags.map((item, index) =>
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