import React, { useState } from 'react'
import Style from './style'
import data from "../../mock/folder.json"
import ImageCard from '../../components/ImageCard'
import AddIcon from "../../assets/AddIcon.svg"
import Modal from '../../components/Modal'
import AddImage from '../../modals/AddImage'
import Operations from '../../components/Operations'

interface stateProps{
    active: boolean,
    selectedItems: string[]
}

const Folder = () => {
    const [addImageModal,setAddImageModal] = useState(false);

    const [select,setSelects] = useState<stateProps>({
        active: false,
        selectedItems:[],
    });

    const setSelect = (obj:{active?:boolean,selectedItems?:string[]}) => setSelects(prev => ({...prev,...obj}))
    return (
        <>
            <Operations data={data.map(item => ({id:item.id,name:item.title}))} select={select} setSelect={setSelect} />
            <Style className='containerWidth'>
                <div className="add_button" onClick={() => {setAddImageModal(true)}}>
                    <img src={AddIcon} alt="add" />
                </div>
                {data.map((item) => <ImageCard select={select} setSelect={setSelect} {...item} />)}
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