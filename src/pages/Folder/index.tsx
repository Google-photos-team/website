import React, { useState } from 'react'
import Style from './style'
import data from "../../mock/folder.json"
import ImageCard from '../../components/ImageCard'
import AddIcon from "../../assets/AddIcon.svg"
import Modal from '../../components/Modal'
import AddImage from '../../modals/AddImage'
const Folder = () => {
    const [addImageModal, setAddImageModal] = useState(false);
    return (
        <>
            <Style className='containerWidth'>
                <div className="add_button" onClick={() => {setAddImageModal(true)}}>
                    <img src={AddIcon} alt="add" />
                </div>
                {data.map((item) => <ImageCard {...item} />)}
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