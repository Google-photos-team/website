import React from 'react'
import Style from './style'
import data from "../../mock/folder.json"
import ImageCard from '../../components/ImageCard'

const Folder = () => {
    return (
        <Style className='containerWidth'>
            {data.map((item) => <ImageCard {...item} />)}
        </Style>
    )
}

export default Folder