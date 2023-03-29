import React, { useState } from 'react'
import Button from '../../../components/Button'
import Input from '../../../components/Input'
import Style from './style'
import TagWithDelete from './TagWithDelete'

interface IProps {
    tags: string[],
    addTag: (tag: string) => void,
    deleteTag: (tag: string) => void
}
const TagsInput = ({ tags, addTag, deleteTag }: IProps) => {
    const [value, setValue] = useState("");

    const handelAdd = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (value && !tags.includes(value) && tags.length < 10) {
            addTag(value);
            setValue("");
        }
    }

    return (
        <Style>
            {tags.length > 0 &&
                <div className="tags">
                    {tags.map(el => <TagWithDelete key={el} tag={el} onDelete={() => deleteTag(el)} />)}
                </div>
            }
            <form className="form" onSubmit={handelAdd}>
                <Input
                    fullWidth
                    placeholder='tag'
                    value={value}
                    onChange={(e) => { setValue(e.target.value) }} />
                <Button>ADD</Button>
            </form>
        </Style>
    )
}

export default TagsInput