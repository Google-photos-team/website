import React, { useState, useEffect } from 'react'
import Style from './style'
import ImageCard from '../../components/ImageCard'
import AddIcon from "../../assets/AddIcon.svg"
import AddImage from '../../modals/AddImage'
import Operations from '../../components/Operations'
import { useParams } from 'react-router'
import { deleteImages, getImages } from '../../api/ImagesAPI'
import { toast } from 'react-toastify';
import Loading from '../../components/Loading'
import ModalV2 from '../../components/ModalV2'
import requireAuth from '../../hocs/requireAuth'

interface stateProps {
    active: boolean,
    selectedItems: string[]
}

const Folder = () => {
    const { id: folder_id } = useParams();
    const [data, setData] = useState<Image[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const [addImageModal, setAddImageModal] = useState(false);

    const [select, setSelects] = useState<stateProps>({
        active: false,
        selectedItems: [],
    });

    useEffect(() => {
        if (folder_id) {
            setIsLoading(true);
            getImages(folder_id).then((images) => {
                setData(images);
            }).catch((error) => {
                toast.error(error.message)
            }).finally(() => {
                setIsLoading(false);
            });
        }
    }, [])

    const setSelect = (obj: { active?: boolean, selectedItems?: string[] }) => {
        setSelects(prev => ({ ...prev, ...obj }))
    }

    const handleDelete = () => {
        deleteImages(select.selectedItems, folder_id || "");
        setData(prev => prev.filter(el => !select.selectedItems.includes(el._id)))
        setSelect({ active: false, selectedItems: [] });
    }

    if (isLoading) {
        return <Loading />
    }

    return (
        <>
            <Operations
                data={data.map(el => { return { _id: el._id } })}
                select={select}
                setSelect={setSelect}
                handleDelete={handleDelete}
            />

            <Style className='containerWidth'>
                <div className="add_button" onClick={() => { setAddImageModal(true) }}>
                    <img src={AddIcon} alt="add" />
                </div>
                {data.map((item) => <ImageCard
                    key={item._id}
                    select={select}
                    setSelect={setSelect}
                    {...item} />)}
            </Style>
            {addImageModal && <ModalV2 close={() => setAddImageModal(false)}>
                <AddImage
                    close={() => setAddImageModal(false)}
                    folder_id={folder_id || ""}
                    addImage={(image: Image) => { setData(prev => [image, ...prev]) }}
                />
            </ModalV2>}
        </>
    )
}

export default requireAuth(Folder)