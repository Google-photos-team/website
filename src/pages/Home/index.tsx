import {useState} from 'react'
import Style from './style'
import data from "../../mock/folders.json"
import FolderImg from "../../assets/FolderImg.svg"
import AddIcon from "../../assets/AddIcon.svg"
import Modal from '../../components/Modal'
import AddFolder from '../../modals/AddFolder'

const Home = () => {
    const [addFileModal,setAddFileModal] = useState(false);
    return (
        <>
            <Style className='containerWidth'>
                <div className="addFolder" onClick={() => setAddFileModal(true)}>
                    <img src={AddIcon} alt="" />
                </div>
                {data.map(e => (
                    <div key={e.id} className="folder">
                        <img src={FolderImg} alt="" />
                        {e.name}
                    </div>
                ))}
            </Style>
            <Modal
                close={() => setAddFileModal(false)}
                isOpen={addFileModal}
                Content={AddFolder}
            />
        </>
    )
}

export default Home