import React, { useState, useEffect } from 'react'
import Style from './style'
import ImageCard from '../../components/ImageCard'
import AddIcon from "../../assets/AddIcon.svg"
import Modal from '../../components/Modal'
import AddImage from '../../modals/AddImage'
import Operations from '../../components/Operations'
import { getFolderById } from '../../api/FoldersAPI'
import { useParams } from 'react-router'

interface stateProps{
    active: boolean,
    selectedItems: string[]
}

const Folder = () => {
    const { id } = useParams();
    const [data,setData] = useState<{_id:string,name:string,image:string,tags: string[]}[]>([]);

    const [addImageModal,setAddImageModal] = useState(false);

    const [select,setSelects] = useState<stateProps>({
        active: false,
        selectedItems:[],
    });

    useEffect(() => {
        id?getFolderById({id,setState:setData}):"";
      return () => {}
    }, [])
    

    const setSelect = (obj:{active?:boolean,selectedItems?:string[]}) => setSelects(prev => ({...prev,...obj}))
    return (
        <>
            <Operations data={data} select={select} setSelect={setSelect} />
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