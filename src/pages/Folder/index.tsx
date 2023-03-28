import React, { useState } from 'react'
import Style from './style'
import data from "../../mock/folder.json"
import CustomLink from '../../components/CustomLink'
import AddIcon from "../../assets/AddIcon.svg"
import Modal from '../../components/Modal'
import AddImage from '../../modals/AddImage'


const Folder = () => {
    const [addImageModal,setAddImageModal] = useState(false);
    return (
        <>
            <Style className='containerWidth'>
                <div className="addImage" onClick={() => setAddImageModal(true)}>
                    <img src={AddIcon} alt="" />
                </div>
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
            <Modal
                close={() => setAddImageModal(false)}
                isOpen={addImageModal}
                Content={AddImage}
            />
        </>
    )
}

export default Folder