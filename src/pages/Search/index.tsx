import React from 'react'
import Style from './style'
import data from "../../mock/folder.json"
import { useLocation } from 'react-router'
import { H5, Span } from '../../components/Typography'
import ImageCard from '../../components/ImageCard'

const Search = () => {
    const { search } = useLocation();
    
    return (
        <Style className='containerWidth'>
            <H5 margin='0 0 1rem 0'>Search results for:
                <Span weight={600} color='lightBlue'>"{decodeURI(search.split("=")[1])}"</Span>
            </H5>
            <div className="results_block">
                {data.map((item) => <ImageCard {...item} />)}
            </div>
        </Style>
    )
}

export default Search