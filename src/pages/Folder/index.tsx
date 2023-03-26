import React from 'react'
import Style from './style'
import data from "../../mock/folder.json"
import CustomLink from '../../components/CustomLink'

const Folder = () => {
    return (
        <Style className='containerWidth'>
            {data.map((item) =>(
                <div className="oneImage" key={item.id}>
                    <CustomLink to={`/image/${item.id}`}>
                        <div className="mainImage">
                            <img src={item.img} alt="" />
                        </div>
                    </CustomLink>
                    <CustomLink to={`/image/${item.id}`}>
                        <div className="text">{item.title}</div>
                    </CustomLink>
                    <div className="tags">
                        {item.tags.map((tag,index) =>(
                            <div className="oneTag" key={index}>#{tag}</div>
                        ))}
                    </div>
                </div>
            ))}
        </Style>
    )
}

export default Folder